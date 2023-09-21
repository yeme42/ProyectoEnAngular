import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/persona';
import { DataServiceService } from 'src/app/servicios/data-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas:persona[] = [];


  constructor(
    private yeri: DataServiceService ){

  }

  ngOnInit(): void {
    this.personas = this.yeri.obtenerDato()
  }

}
