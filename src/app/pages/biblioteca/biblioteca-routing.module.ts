import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from '../setting/areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { TipoComponent } from './tipo/tipo.component';
import { LibroComponent } from './libro/libro.component';
import { BibliotecaComponent } from './biblioteca.component';


const routes: Routes = [
  {
    path: "biblioteca", component: BibliotecaComponent
  },
  {
    path: "areas", component: AreasComponent
  },
  {
    path: "autores", component: AutoresComponent
  },
  {
    path: "editorial", component: EditorialComponent
  },
  {
    path: "existencia", component: ExistenciaComponent
  },
  {
    path: "libro", component: LibroComponent
  },
  {
    path: "tipo", component: TipoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
