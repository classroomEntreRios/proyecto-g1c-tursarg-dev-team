import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  //emailPattern = "^ [a-z0-9 ._% + -] + @ [a-z0-9 .-] + \. [az] {2,4} $" ; 
  
  constructor(public service: UsuariosService) { }

  public isError=false;

  ngOnInit(): void {
    this.resetForm();
  }
  ///////verificar si existe el usuario
  


  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      idUsuario: 0,
      urlFotoUsuario: '',
      nombreUsuario:'',
      nombre: '',
      apellido: '',
      contrasenia: '',
      telefono: '',
      rolAdmin: false,
      mail: ''
    };
  }

  onSubmit(form: NgForm) {
   
    this.insertRecord(form);
    

    
  }

  insertRecord(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(res => {

      this.resetForm(form);
     
    });
  }

}
