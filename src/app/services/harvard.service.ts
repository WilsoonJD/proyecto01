import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://api.harvardartmuseums.org';
const urlImage = 'https://ids.lib.harvard.edu/ids/view';

@Injectable({
  providedIn: 'root'
})

export class HarvardService {

  constructor( private http: HttpClient) {
    //console.log ('Servicio Listo');
   }

   

   getPaginatedArt(params: any): Observable<any> {
     params.apikey = '450c4a44-802f-47e1-b8ed-7d5774bc7639';
     params.q = 'format="image/jpeg"';
     return this.http.get(`${baseUrl}/image?`, { params });
   }

   getBusqueda(termino: string, params: any): Observable<any> {
    params.apikey = '450c4a44-802f-47e1-b8ed-7d5774bc7639';
    params.q = `${termino} format="image/jpeg"`;
    return this.http.get(`${baseUrl}/image?`, { params });
   }

  

}
