import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NumberComponent } from './number/number.component';
import { DataComponent } from './data/data.component';
import { ExmpleForComponent } from './exmple-for/exmple-for.component';
import { PostiCinemaComponent } from './posti-cinema/posti-cinema.component';
import {SliderModule} from 'primeng/slider';
import { LepippeComponent } from './lepippe/lepippe.component';
import { HttpClientModule } from '@angular/common/http';
import {FattoComponent} from './fatto/fatto.component';
import { FotoComponent } from './foto/foto.component';

import {GMapModule} from 'primeng/gmap';
import { DropComponent } from './drop/drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CardComponent,
    NumberComponent,
    DataComponent,
    ExmpleForComponent,
    PostiCinemaComponent,
    LepippeComponent,
    FattoComponent,
    FotoComponent,
    DropComponent
   
  ],
  imports: [
    BrowserModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    SliderModule,
    HttpClientModule,
    GMapModule,
    DropComponent

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
