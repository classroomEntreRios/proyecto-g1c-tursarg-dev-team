import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    constructor() { }



    urlRegistro = 'https://localhost:44332/api';
    urlLogin = 'https://localhost:44332/api/USUARIOS1/login';


}
