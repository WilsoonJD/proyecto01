import { Component, OnInit } from '@angular/core';
import { HarvardService } from '../../services/harvard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  NuevasArtes: any[] = [];
  constructor( private harvard: HarvardService) {

    this.harvard.getNewArt()
    .subscribe( (data : any) => {
    console.log(data.records);
    this.NuevasArtes = data.records;
    });
   }

 

}
