import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {map, tap, catchError} from "rxjs/operators";

import {IProduct} from "./product";

@Injectable()
export class ProductService {
    private _productUrl = './assets/mock_data/products/products.json';

    constructor(private _http: HttpClient){ }

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}