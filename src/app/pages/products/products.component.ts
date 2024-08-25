import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsServiceService } from '../../api/products-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  private _productsService = inject(ProductsServiceService);

  public products: Product[] = [];

  loading: boolean = true;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productsService.getAllProducts().subscribe(data => {
      this.products = data;
      this.loading = false;
    })
  }

}
