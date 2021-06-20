import { Component, OnInit } from '@angular/core';
import { HarvardService } from '../../services/harvard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  // cantidad inicial de registros a mostrar por página
  sizeSelected=5;
  // Cantidad de registros que trae la consulta
  pageSize = 50;
  // Rango de items para mostrar
  pageSizes = [5, 10, 20, 30, 40, 50];

  NuevasArtes: any[] = [];
  constructor( private harvardService: HarvardService) {
  }

   ngOnInit() {
    this.retrieveData();
  }

  /*
   * Método consumir el servicio que se conecta a la api
   */
   retrieveData() {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.harvardService.getPaginatedArt(params).subscribe( (data : any) => {
      console.log(data.records);
      this.NuevasArtes = data.records;
      });
   };

   /*
    * Método para obtener los parametros necesarios para realizar la consulta
   */
   getRequestParams(searchTitle: any, page: number, pageSize: any) {
    // tslint:disable-next-line:prefer-const
    let params = {
      title: '',
      page: 0,
      size: 0
    };

    if (searchTitle) {
      params.title = searchTitle;
    }

    if (page) {
      params.page = page - 1;
    }

    if (pageSize) {
      params.size = pageSize;
    }

    return params;
  };

  handlePageChange(event: any) {
    this.page = event;
    this.retrieveData();
  };

  handlePageSizeChange(event: any) {
    this.sizeSelected = event.target.value;
    this.page = 1;
    this.retrieveData();
  }

}
