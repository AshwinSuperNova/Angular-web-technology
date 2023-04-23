import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  private url = 'https://jsonplaceholder.typicode.com/users';
   
  constructor(private http: HttpClient) { }
 
  getData(){
    return this.http.get(this.url);
  }
}
