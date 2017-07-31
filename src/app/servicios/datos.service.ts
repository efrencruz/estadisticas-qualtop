import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class DatosService {
  //url: String = 'http://localhost/reportes-qualtop/api/';
  url: String = 'http://104.198.75.167/reportes-qualtop/api/';
  
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
/* 
  obtenerHerramientas1(){
    let params = { op:'obtenerHerramientas1'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerHerramientas2(){
    let params = { op:'obtenerHerramientas2'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerHerramientas3(){
    let params = { op:'obtenerHerramientas3'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerHerramientas4(){
    let params = { op:'obtenerHerramientas4'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerHerramientas5(){
    let params = { op:'obtenerHerramientas5'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerLenguajes1(){
    let params = { op:'obtenerLenguajes1'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerLenguajes2(){
    let params = { op:'obtenerLenguajes2'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res => res.json());
  }

  obtenerLenguajes3(){
    let params = { op:'obtenerLenguajes3'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerLenguajes4(){
    let params = { op:'obtenerLenguajes4'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerLenguajes5(){
    let params = { op:'obtenerLenguajes5'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerLenguajes6(){
    let params = { op:'obtenerLenguajes6'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerSoluciones(){
    let params = { op:'obtenerSoluciones'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerCertificaciones1(){
    let params = { op:'obtenerCertificaciones1'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerCertificaciones2(){
    let params = { op:'obtenerCertificaciones2'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerCertificaciones3(){
    let params = { op:'obtenerCertificaciones3'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerMetodologias1(){
    let params = { op:'obtenerMetodologias1'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }

  obtenerMetodologias2(){
    let params = { op:'obtenerMetodologias2'};
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.__http.post(this.url+'datos.php',params)
      .map(res =>res.json());
  }
*/
}
