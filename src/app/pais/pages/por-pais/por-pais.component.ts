import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {

    this.hayError = false;
    this.termino  = termino;

    //Forma actual como se manejan los parámetros
    // this.paisService.buscarPais(this.termino)
    this.paisService.buscarPais(termino)
    .subscribe({
      next: ((paises) =>{
         console.log(paises);
         this.paises = paises; 
      }),
      error: ((err) => {
         this.hayError = true;
         this.paises   = [];
      }), 
    });

    //Forma antigua como se manejan los parámetros
    // this.paisService.buscarPais(this.termino)
    // .subscribe((paises) => {
    //    console.log(paises);
    //    this.paises = paises; 
    // }, (err) => {
    //   this.hayError = true;
    //   this.paises   = [];
    // });

  }

  sugerencias(termino: string) {
     this.hayError = false;
     //TODO: Crear sugerencias
  }

}