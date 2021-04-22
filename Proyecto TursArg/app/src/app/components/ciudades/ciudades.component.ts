import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Ciudades } from 'src/app/models/ciudades.model';
import { CiudadesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  filtro='';
  ciudad : any[];
  constructor(private service:CiudadesService) { }

  ngOnInit(){
    this.listarciudades() ;
  }
  listarciudades(){
  this.service.listaCiudades().subscribe(data => {
    this.ciudad = data;
    console.log('klllk', data);
  })
    
  };
    
    
    
  }
