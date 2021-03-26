import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import {UsuariosService} from '../services/usuarios.service';
import {Usuarios} from '../models/usuarios.model'
import {map} from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Directive({
  selector: '[usernameUnico]',
  providers:[{provide : NG_ASYNC_VALIDATORS, useExisting: UsernameUnicoDirective, multi: true}]
})
export class UsernameUnicoDirective implements AsyncValidator{

    constructor(private UsuariosService:UsuariosService) { }

    
    validate(control : import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    const nombreUsuario=control.value;
    return this.UsuariosService.VerificarUsuario(nombreUsuario).pipe(
      map(usernameArr =>{
        if (usernameArr.length > 0){
          return {usernameUnico:true};
        }
        return null;
      })

    );
    
  } 
  
}

