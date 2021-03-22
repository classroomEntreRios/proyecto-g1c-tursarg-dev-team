import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  formData: Usuarios;

  readonly rootURL = 'https://localhost:44332/api'


  constructor(private http: HttpClient) { }

  postUsuario(formData: Usuarios) {

    return this.http.post(this.rootURL + '/USUARIOS1', formData);
  }
////// verificar si exite el usuario /////
  VerificarUsuario():Observable<string[]>{
  return this.http.get<string[]>('https://localhost:44332/api/USUARIOS1');
}

}
