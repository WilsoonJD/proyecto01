import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarvardService {

  constructor( private http: HttpClient) {
    console.log ('Servicio Listo');
   }

   getNewArt(){

    const params = new HttpParams()
    .set('apikey', '450c4a44-802f-47e1-b8ed-7d5774bc7639')
    .set('page', '')
    .set('q', 'format= "image/jpeg"')
    .set('records', 'imageid');
    
    
    return this.http.get('https://api.harvardartmuseums.org/image?', { params });
   }
}
