import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from 'src/app/app.component';
import { PageHomeComponent } from 'src/app/Home/page-home/page-home.component';
import { SectionHeroComponent } from 'src/app/Home/section-hero/section-hero.component';
import { SectionThreeCardsComponent } from 'src/app/Home/section-three-cards/section-three-cards.component';
import { SectionTwoColRowComponent } from 'src/app/Home/section-two-col-row/section-two-col-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeroComponent,
    SectionThreeCardsComponent,
    SectionTwoColRowComponent,
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
