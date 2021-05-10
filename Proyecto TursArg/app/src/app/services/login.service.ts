import { Usuarios } from './../models/usuarios.model';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData: Login;

  readonly rootURL = 'https://localhost:44332/api'

  constructor(private url: UrlService, private http: HttpClient) { }

  urlLogin: any;

  autenticarUsuario(datos: Usuarios, formData: Login) {
    return this.http.post(this.url.urlLogin, formData);
  }

  obtenerUsuario(email: string) {
    return this.http.get(this.url.urlRegistro + '?email=' + email)
  }

  public login(formLogin: Login): Observable<any> {
    //params=params.append("email", email)
    // params=params.append("contrasenia", contrasenia)
    return this.http.post(this.rootURL + '/USUARIOS1/login', formLogin)



  }


}
