import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = environment.basedURL + "products/";
  constructor(private http : HttpClient) {

  }

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id){
    return this.http.get<Product>(this.url + id);
  }

}
