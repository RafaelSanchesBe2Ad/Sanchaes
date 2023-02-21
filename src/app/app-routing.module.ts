import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EstudosComponent } from './about/estudos/estudos.component';
import { SucessoComponent } from './about/sucesso/sucesso.component';
import { InicioComponent } from './about/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Sobre', component: AboutComponent},
  {path: 'Sobre/Estudos', component: EstudosComponent},
  {path: 'Sobre/Progresso', component: SucessoComponent},
  {path: 'Sobre/Eu', component: InicioComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

