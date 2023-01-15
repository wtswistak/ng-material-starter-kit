import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getAllCategories(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>("https://fakestoreapi.com/products/categories");
  }

  create(product: ProductModel): Observable<void> {
    return this._httpClient.post<void>("https://fakestoreapi.com/products", product );
  }
}
