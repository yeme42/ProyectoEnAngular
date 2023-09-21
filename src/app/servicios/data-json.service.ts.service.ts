import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { persona } from '../persona';


@Injectable({
  providedIn: "root",
})
export class DataJsonServiceTsService {

  
  constructor( private http: HttpClient) {
    this.http.get('http://localhost:3000/posts')
   }

  getUsers(){
    return this.http.get('http://localhost:3000/posts');
    }
  eliminar(id:number){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
       
  }
  editar(id:number){
    console.log("La funcion esta lista para editar")
  }
  crear(body:persona){
    return this.http.post('http://localhost:3000/posts',body);
  }
}


