import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  todoView=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }
}
