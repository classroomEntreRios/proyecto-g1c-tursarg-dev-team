import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudades} from './../models/ciudades.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  formData: Ciudades;
  readonly rootURL = 'https://localhost:44332/api'

  constructor(private http: HttpClient) { }


/////////Selecciona el usuario para mostrar en el modal por el idUsuario//////
listaCiudades(): Observable<Ciudades[]> {

  return this.http.get<Ciudades[]>(this.rootURL + '/CIUDADES')
}

}
