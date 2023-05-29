import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseAppComponent } from './base-app/base-app.component';
import { AccountComponent } from './domain/pages/account/account.component';
import { FormConfigComponent } from './form-notas/form-config/form-config/form-config.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  // { path: 'base',
  //   loadChildren:()=> import('./shared/shared.module').then(onfulfilled: m => m.Nota)},
  {
    path: 'base',
    component: BaseAppComponent,
    children: [{
      path: 'new',
      component: FormConfigComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function onfulfilled(value: typeof import("c:/Users/usuar/Projeto-Clovis/src/app/shared/shared.module")) {
  throw new Error('Function not implemented.');
}

