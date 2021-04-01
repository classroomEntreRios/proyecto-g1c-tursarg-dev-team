import { Usuarios } from './../models/usuarios.model';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private url: UrlService, private http: HttpClient) { }

  urlLogin: any;

  autenticarUsuario(datos: Usuarios) {
    return this.http.post(this.url.urlLogin, datos);
  }

  obtenerUsuario(email: string) {
    return this.http.get(this.url.urlRegistro + '?email=' + email)
  }
}
