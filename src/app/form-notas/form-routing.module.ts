import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "../domain/pages/account/account.component";
import { FormConfigComponent } from "./form-config/form-config/form-config.component";


const routes: Routes = [
    { path: '', component: AccountComponent },
    { path: 'new', component: FormConfigComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class FormRoutingModude { }