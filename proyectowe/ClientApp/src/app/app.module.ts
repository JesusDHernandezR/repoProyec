import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { RegistrarAbonoComponent } from './registrar-abono/registrar-abono.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { IngresoUsuarioComponent } from './ingreso-usuario/ingreso-usuario.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { VerRutaComponent } from './ver-ruta/ver-ruta.component';
import { CuentasComponent } from './cuentas/cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CrearUsuarioComponent,
    RegistrarAbonoComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactanosComponent,
    IngresoUsuarioComponent,
    ConsultarComponent,
    VerRutaComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'crear-usuario', component:CrearUsuarioComponent},
      {path: 'registrar-abono', component:RegistrarAbonoComponent},
      {path: 'nosotros', component:NosotrosComponent },
      {path: 'servicios', component:ServiciosComponent },
      {path: 'contactanos', component:ContactanosComponent },
      {path: 'ingreso-usuario', component:IngresoUsuarioComponent },
      {path: 'consultar', component:ConsultarComponent },
      {path: 'ver-ruta', component:VerRutaComponent },
      {path: 'cuentas', component:CuentasComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
