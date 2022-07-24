import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
 // endpoint: string = 'https://localhost:3000/api/client';
  // endpoint: string = environment.API_URL+'client/';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    .set('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  /*header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");*/
  constructor(private http: HttpClient) { }

  //GET ALL VEHICLES

  crearChatbot(){
    //return this.http.get('http://127.0.0.1:3977/fichero/probando');
    return this.http.get('https://tfg-hector-22.herokuapp.com/fichero/probando');
  }

  borrarChatbot() {
    // return this.http.get('http://127.0.0.1:3977/intent/borra');
    return this.http.get('https://tfg-hector-22.herokuapp.com/intent/borra');
  }
  
}