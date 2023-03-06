import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';

const routes: Routes = [
  //Configuracion de la ruta principal de la aplicacion
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  //Configuracion de la ruta por region de la aplicacion
  {
    path: 'region',
    component: PorRegionComponent
  },
  //Configuracion de la ruta por capital de la aplicacion
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  //Configuracion de la ruta ver detalle de pais en particular de la aplicacion
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
   //Configuracion de una ruta de error o que no haga parte de la aplicacion
   {
    path: '**',
    redirectTo: ''
    // redirectTo: 404Component o ErrorComponent
  }
];

@NgModule({
  imports: [
    //Siempre se importa el RouterModule y se configura sus rutas principales e hijas dependiendo de la aplicacion
    RouterModule.forRoot(routes)
  ],
  exports: [
    //Siempre se exporta el RouterModule como buena practica para que las rutas funcionen
    RouterModule
  ]
})
//Este modulo se exporta en el modulo ptincipal de la aplicacion es decir en el (app.module.ts) en este caso
export class AppRoutingModule { }
