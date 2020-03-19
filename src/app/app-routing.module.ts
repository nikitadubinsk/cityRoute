import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { FormComponent } from './shared/components/form/form.component';
import { RouteComponent } from './shared/components/route/route.component';
import { LoginComponent } from './shared/components/admin/login/login.component';
import { AdminPageComponent } from './shared/components/admin/admin-page/admin-page.component';
import { EditPlaceComponent } from './shared/components/admin/edit-place/edit-place.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
    {path: '', component: FormComponent},
    {path: 'route', component: RouteComponent},
    {path: 'admin', component: LoginComponent},
    {path: 'admin/all', component: AdminPageComponent},
    {path: 'admin/new', component: EditPlaceComponent},
    {path: 'admin/:id', component: EditPlaceComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
