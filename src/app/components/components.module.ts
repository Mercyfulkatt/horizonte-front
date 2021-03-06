//==============
// MODULES
//==============
import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule  }  from '@angular/router'

//==============
// COMPONENTS
//==============
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavBarComponent  }   from './nav-bar/nav-bar.component';
import { SideBarComponent  }  from './side-bar/side-bar.component';
import { CardComponent }      from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ModalServiciosIntComponent } from './modal/modal-servicios-int/modal-servicios-int.component';
import { FiscalesComponent } from './fiscales/fiscales.component';
import { CardPaquetesComponent } from './card-paquetes/card-paquetes.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { TarjetaCotizacionComponent } from './cotizacion/tarjeta-cotizacion/tarjeta-cotizacion.component';
import { CalendarComponent } from './calendar/calendar.component';
import { jqxSchedulerModule, jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    CardComponent,
    DashboardComponent,
    SearchBarComponent,
    ModalComponent,
    ModalServiciosIntComponent,
    SpinnerComponent,
    FiscalesComponent,
    CardPaquetesComponent,
    TarjetaCotizacionComponent,
    CalendarComponent
    
],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    NavBarComponent,
    CardComponent,
    SideBarComponent,
    SearchBarComponent,
    FiscalesComponent,
    CardPaquetesComponent,
    ModalComponent,
    ModalServiciosIntComponent,
    TarjetaCotizacionComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    CalendarComponent
       ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    jqxSchedulerModule
  ],
  providers: [
    ModalServiciosIntComponent
  ]
})
export class ComponentsModule { }
