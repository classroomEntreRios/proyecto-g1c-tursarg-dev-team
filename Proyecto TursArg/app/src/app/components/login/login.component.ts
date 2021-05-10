import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, * as JWT from 'jwt-decode';
import { FormControl, FormGroup, Validator, FormsModule, NgForm, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import swal from 'sweetalert2'
import { CookieService } from 'ngx-cookie-service'
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  service: any;


  constructor(public LoginService: LoginService, private router: Router, private formBuilder: FormBuilder, private cookieToken: CookieService) { };


  formLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    contrasenia: ['', [Validators.required]]

  });

  ngOnInit() {

  }



  onSubmit() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched()
    }
    // console.log('perraaaaa', this.formLogin)
    return this.LoginService
      .login(this.formLogin.value)
      .subscribe(data => {
        console.log('loginnnn', data);
        if (data.Resultado == 1) {

          /// guardo el Token en la Cookie ///
          this.token = data.Datos
          this.cookieToken.set('Token', this.token);
          this.token = this.cookieToken.get('Token');
          console.log('Tokenn', this.token)
          swal.fire('Enhorabuena', 'Bienvenido', 'success');


          this.router.navigate(['/index']);
          ///////admin true////
        } else if (data.Resultado == 3) {
          /// guardo el Token en la Cookie ///
          this.token = data.Datos
          this.cookieToken.set('Token', this.token);
          this.token = this.cookieToken.get('Token');
          //

          console.log('Tokenn', this.token)
          swal.fire('Enhorabuena', 'Bienvenido', 'success');

          this.router.navigate(['/dashboard']);

        } else {
          swal.fire('Error Login', 'Verifique Datos', 'error');

        }
      },

      );
  }
}

