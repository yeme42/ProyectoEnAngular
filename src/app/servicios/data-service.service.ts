import { Injectable, OnInit } from '@angular/core';
import { persona } from '../persona';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit  {


  private Personas:persona[] = [
    {
      id: 1,
      nombre:"Rafael",
      apellido: "Muentes",
      fechaNac: "1972-03-07",
      genero:"M"
    },
  {
      id: 2,
      nombre:"Yerinson",
      apellido: "Muentes",
      fechaNac: "1998-05-08",
      genero:"M"
    },
  {
      id: 3,
      nombre:"Adelaida",
      apellido: "Montiel",
      fechaNac: "1975-10-27",
      genero:"M"
    },]
  

  constructor() {

  
   }
   obtenerDato(){
    return this.Personas
  }
  
  ngOnInit(): void {
    
  }

}




