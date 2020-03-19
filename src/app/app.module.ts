import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/admin/login/login.component';
import { AdminPageComponent } from './shared/components/admin/admin-page/admin-page.component';
import { OnePlaceComponent } from './shared/components/admin/one-place/one-place.component';
import { EditPlaceComponent } from './shared/components/admin/edit-place/edit-place.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { FormComponent } from './shared/components/form/form.component';
import { RouteComponent } from './shared/components/route/route.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    OnePlaceComponent,
    EditPlaceComponent,
    MainPageComponent,
    FormComponent,
    RouteComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularYandexMapsModule.forRoot('ea1646d1-2502-47b0-8738-bd4f2afe3830')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
