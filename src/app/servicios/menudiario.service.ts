import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenudiarioService {

  constructor( private http:HttpClient) { }

  gettMenuDesayuno(){
    return this.http.get<any>('http://localhost:3000/api/mostrardesayuno');
  }

  gettMenuAlmuerzo(){
    return this.http.get<any>('http://localhost:3000/api/mostraralmuerzo');
  }
  gettMenuMerienda(){
    return this.http.get<any>('http://localhost:3000/api/mostrarmerienda');
  }



  
}
