import { Usuarios } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, ObservedValuesFromArray } from 'rxjs';



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
  VerificarUsuario(nombreUsuario:string):Observable<string[]>{
  return this.http.get<string[]>(this.rootURL+'/USUARIOS1?user='+nombreUsuario);
}
////// verificar si exite el Email /////
VerificarEmail(email:string):Observable<string[]>{
  return this.http.get<string[]>(this.rootURL+'/USUARIOS1?email='+email);
}
}
