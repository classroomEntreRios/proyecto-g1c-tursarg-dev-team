import swal from 'sweetalert2';
import { Usuarios } from './../../models/usuarios.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, * as JWT from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';
import { DatosService } from 'src/app/services/datos.service';


import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private login: LoginService, private router: Router, private datos: DatosService) { }


  usuario: Usuarios = new Usuarios;
  usuarioAutenticado = false;
  respuesta: any;
  datosU: any;

  ngOnInit(): void {
  }

  ingresoForm = new FormGroup({
    emailLogin: new FormControl(""),
    passwLogin: new FormControl("")
  });


  ingreso(form: FormGroup) {
    // pasar los inputs del form al objeto usuario
    this.usuario.email = this.ingresoForm.value.emailLogin;
    this.usuario.contrasenia = this.ingresoForm.value.passwLogin;

    this.login.autenticarUsuario(this.usuario).subscribe(resp => {
      this.respuesta = resp;
      if (this.respuesta.Resultado == 1) {
        swal.fire('Bienvenido/a', 'Inicio de Sesion Exitoso', 'success');
        this.login.obtenerUsuario(this.usuario.email.toString())
          .subscribe(resp => {
            this.datosU = resp;
            this.datos.agregarDatos(this.datosU);
            // this.router.navigate(['index']);
            this.usuarioAutenticado = true;
          })
      }
      // si el resultado es 0, emite alerta y redirige a la página de inicio
      else {
        swal.fire('Error', 'El email o contraseña no existen', 'error');
        // this.router.navigate(['']);
      }
    }, err => {
      console.log(err)
      swal.fire('Error en el servidor', 'Ocurrió un error inesperado, por favor intente nuevamente más tarde', 'error');
    })
  }


}
