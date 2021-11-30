import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'administration',
        loadChildren: () => import('./pages/administration/administration.module').then(m => m.AdministrationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
