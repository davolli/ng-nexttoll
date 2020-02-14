import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from 'src/app/app.component';
import { PageHomeComponent } from 'src/app/Home/page-home/page-home.component';
import { SectionHeroComponent } from 'src/app/Home/section-hero/section-hero.component';
import { SectionThreeCardsComponent } from 'src/app/Home/section-three-cards/section-three-cards.component';
import { SectionTwoColRowComponent } from 'src/app/Home/section-two-col-row/section-two-col-row.component';
import { SectionTwoColInvertComponent } from 'src/app/Home/section-two-col-invert/section-two-col-invert.component';
import { SectionCountersComponent } from 'src/app/Home/section-counters/section-counters.component';
import { SectionSixCardsComponent } from 'src/app/Home/section-six-cards/section-six-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeroComponent,
    SectionThreeCardsComponent,
    SectionTwoColRowComponent,
    SectionTwoColInvertComponent,
    SectionCountersComponent,
    SectionSixCardsComponent,
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
