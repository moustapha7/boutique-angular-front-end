import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-explore-product',
  templateUrl: './explore-product.component.html',
  styleUrls: ['./explore-product.component.css']
})
export class ExploreProductComponent implements OnInit {

  sections: Product[][] = [];

  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.fetchProducts().subscribe(products => {
      this.sections.push(products.slice(0, products.length / 2));
      this.sections.push(products.slice(products.length / 2, products.length));
    });
  }
}