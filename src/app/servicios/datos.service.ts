import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class DatosService {
  url: String = 'http://localhost/reportes-qualtop/api/';
  //url: String = 'http://104.198.75.167/reportes-qualtop/api/';
  
  constructor(private __http: Http){}

  obtenerDatos(dato){
    let params = { op:'obtenerDatos', dato};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerDatosGrafica(tipo, cantidad, datos){
    let params = { op:'obtenerDatosGrafica', tipo, cantidad, datos};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerIdiomas(){
    let params = { op:'obtenerIdiomas'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

}
