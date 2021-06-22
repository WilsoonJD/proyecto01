import { Component, OnInit } from '@angular/core';
import { HarvardService } from 'src/app/services/harvard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  implements OnInit{

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

  artistas : any[] = []
  cargando: boolean = true;

  constructor( private harvardService: HarvardService) { }

  ngOnInit() {
    this.cargando;
    this.retrieveData("");
  }

  
  /*buscar(termino: string, params: any){
    console.log(termino);
    
    this.harvardService.getBusqueda( termino, params )
        .subscribe( data =>{
          console.log(data);
        this.artistas = data;
        });
    }
  
  /*
   * Método consumir el servicio que se conecta a la api
   */
   retrieveData(termino: string) {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.harvardService.getBusqueda(termino,params)
        .subscribe( (data : any) => {
      console.log(data.records);
      this.artistas = data.records;
      this.cargando = false;
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
    this.retrieveData("");
  };

  handlePageSizeChange(event: any) {
    this.sizeSelected = event.target.value;
    this.page = 1;
    this.retrieveData("");
  }

}
