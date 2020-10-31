import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './model/userModel';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL='http://localhost:1234';

  constructor( private http: HttpClient) { }

  get(url: string) {
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }

  post(url: string, payload: User) {
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  patch(url: string, payload: User) {
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url: string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
