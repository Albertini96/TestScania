import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { CarrosComponent } from './carros/carros.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CaminhoesComponent,
    CarrosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
