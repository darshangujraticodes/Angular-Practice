import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-operation/api-service';
import { Product } from '../api-operation/productDataType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productId = signal<number | undefined>(undefined);
  filteredData = signal<Product | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private productApiService: ApiService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.productId.set(Number(params['id']));
    });

    this.productApiService.getProducts().subscribe((data) => {
      data.products.filter((item) => {
        if (item.id == this.productId()) {
          console.log(item);
          this.filteredData.set(item);
        }
      });
    });

    // console.log(this.filteredData());
  }
}
