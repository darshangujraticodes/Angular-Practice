import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Product } from '../pages/api-operation/productDataType';

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  productData = signal<Product[]>([]);
  apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {
    this.http.get<ProductResponse>(this.apiUrl);
  }
}
