import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { persona } from 'src/app/persona';
import { DataJsonServiceTsService } from 'src/app/servicios/data-json.service.ts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  genero: string[]=[]

  enviarDatos(): any {
    return this.genero
  }
  data: any = []
  model!: NgbDateStruct;
  
  constructor(private dataJsonServiceTsService: DataJsonServiceTsService ){
    
  }
  ngOnInit(): void {
    this.obtenerData()
    
  }
  obtenerData(){
    this.dataJsonServiceTsService.getUsers().subscribe(res => {
      this.data = res
      console.log(this.data)
      })
  }
  eliminar(id:number){
      this.dataJsonServiceTsService.eliminar(id).subscribe( res => {
        console.log(res)
        this.obtenerData()
      })
  }
  editar(){
    console.log("La funcion esta lista para editar")
  }
  crear(nombre:any,
    apellido: any,
    fecha:any,
    masc:any,
    fem:any
    ){
  
    let body:persona = {

      nombre: nombre,
      apellido: apellido,
      fechaNac: fecha,
      genero: this.enviarDatos()
    }
    console.log(masc.value, fem.value)
    this.dataJsonServiceTsService.crear(body).subscribe((res : any) => {
      console.log(res)
      this.obtenerData()
      
    })
  }
}


