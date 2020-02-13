import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from 'src/app/app.component';
import { PageHomeComponent } from 'src/app/Home/page-home/page-home.component';
import { SectionHeroComponent } from 'src/app/Home/section-hero/section-hero.component';
import { SectionVantagensComponent } from 'src/app/Home/section-vantagens/section-vantagens.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeroComponent,
    SectionVantagensComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
