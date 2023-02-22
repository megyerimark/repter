import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JaratserviceService {
  getJaratok() {
    let url ="http://localhost:3000/";
    let endpoint = "jaratok";

    return this.http.get<any>(url+endpoint);
  }

  constructor( private http:HttpClient) { }
}
