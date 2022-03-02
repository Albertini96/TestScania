import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { CarrosComponent } from './carros/carros.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'dash', component: DashboardComponent},
  {path: 'carros', component: CarrosComponent},
  {path: 'caminhoes', component: CaminhoesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
