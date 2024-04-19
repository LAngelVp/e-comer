import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Injeccion de dependencias
  // se puede mandar a llamar solo si se hizo la importacion en app.config
  // permite conectardos y mandar un request y obtener y procesar la info..
  private http = inject(HttpClient);

  constructor() { }

  //obtenemos la informacion
  getProducts(category_id?:string){
    const url = new URL("https://api.escuelajs.co/api/v1/products");
    if (category_id){
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString()); 
    // conectamos al endpoint. Tambien lo podemos tipar entre <Product[]> Lista de productos.
  }

  getOne(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
