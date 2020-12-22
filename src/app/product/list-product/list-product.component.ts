import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  dtTrigger = new Subject();
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.fetchProducts().subscribe(products => {
      console.log(products);
      this.products = products;
      this.dtTrigger.next();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.products = this.products.filter(product => product.id !== res.id);
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
