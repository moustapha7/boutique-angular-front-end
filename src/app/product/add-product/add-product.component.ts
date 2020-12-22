import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup;
  editMode = false;
  product: Product;
  selectedImage: File;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.editMode = true;

        this.productService.getProduct(paramMap.get('id')).subscribe(product => {
          this.product = product;
          this.initForm();
        });
      } else {
        this.initForm();
      }
    });
  }

  initForm() {
    this.form = new FormGroup({
      barcode: new FormControl(this.product ? this.product.barcode : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(13), Validators.pattern('^(0|[1-9][0-9]*)$')]
      }),
      description: new FormControl(this.product ? this.product.description : null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      price: new FormControl(this.product ? this.product.price : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]
      }),
      image: new FormControl(null, {
        updateOn: 'change',
        validators: this.product ? [] : [Validators.required]
      })
    });
  }

  onFileChanged(event: Event) {
    this.selectedImage = (event.target as HTMLInputElement).files[0];
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const value: Product = {
      id: this.product ? this.product.id : null,
      imageUrl: this.product ? this.product.imageUrl : null,
      ...this.form.value
    };

    this.productService.addProduct(value, this.selectedImage).subscribe(() => {
      this.router.navigate(['/list-product', 'products']);
    });
  }
}