import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private _http = inject(HttpClient)

  baseUrl = 'https://fake-store-api.mock.beeceptor.com/api/products'

  getAllProducts(): Observable<any> {
    return this._http.get(this.baseUrl);
  }


}
