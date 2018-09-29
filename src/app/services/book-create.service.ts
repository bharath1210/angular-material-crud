import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class BookCreateService {


 

  constructor(
    private http: HttpClient
  ) {

  }

  bookPost(data) {
    return this.http.post('http://localhost:3000/bookmenu', data);
  }

  bookGet() {
    return this.http.get('http://localhost:3000/bookmenu');
  }

  bookGetById(id) {
    return this.http.get(`http://localhost:3000/bookmenu/${id}`);
  }

  bookEdit(data) {
    const id = data._id;
    return this.http.put(`http://localhost:3000/bookmenu/${id}`, data);
  }

  bookDelete(data) {
    const id = data._id;
    return this.http.delete(`http://localhost:3000/bookmenu/${id}`);
  }

}
