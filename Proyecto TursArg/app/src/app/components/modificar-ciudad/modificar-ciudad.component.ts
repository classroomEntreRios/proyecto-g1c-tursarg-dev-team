import { Component, OnInit, Input} from '@angular/core';
import{NgForm} from '@angular/forms';
import{Location} from '@angular/common';
import {Ciudades} from 'src/app/models/ciudades.model';
import{CiudadesService} from 'src/app/services/ciudades.service'
import swal from 'sweetalert2';


@Component({
  selector: 'app-modificar-ciudad',
  templateUrl: './modificar-ciudad.component.html',
  styleUrls: ['./modificar-ciudad.component.css']
})
export class ModificarCiudadComponent implements OnInit {

 
 
  constructor(public service:CiudadesService, private location:Location) {}

  ngOnInit(): void {
    this.resetForm();
   
    
   
    
   
  }

  resetForm(formCiudad?: NgForm) {
    if (formCiudad != null)
      formCiudad.resetForm();
   
      this.service.formData = {
    idCiudad:0,  
    codPostal: null,
    descripcionCiudad: '',
    nombreCiudad: '',
    urlUbicacionCiudad:'',
    urlfotoCiudad1: '',
    urlfotoCiudad2: '',
    urlfotoCiudad3:''
    };
  }

  onSubmit(formCiudad:NgForm){
    this.guardaModificaCiudad(formCiudad);
  }

  guardaModificaCiudad(formCiudad:NgForm){
///////Comprobacion si tiene codigo postal es UPDATE sino en nueva ciudad//////////////////

    if (formCiudad.value.idCiudad == 0) {
     //nueva ciudad
     
    
     this.service.nuevaciudad(formCiudad.value).subscribe(res=>{
      swal.fire('Enhorabuena', 'Nueva Ciudad se registro exitosamente', 'success').then(function(){
        location.reload();
    });
        
     })
     this.resetForm(formCiudad); 
    }else{

      ////modificacion///
      let id = formCiudad.value.idCiudad
      console.log('formulario',formCiudad)
     this.service.ModificaCiudad(id, formCiudad.value).subscribe(res=>{
      swal.fire('', 'Ciudad Modificada exitosamente', 'success').then(function(){
        location.reload();
    });
      
     })
     
     
  }
  }

 

}
