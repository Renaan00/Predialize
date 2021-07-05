import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientIdComponent } from './components/client/client-id/client-id.component';
import { ClientDetailsComponent } from './components/client/client-details/client-details.component';
import { AllEnterprisesComponent } from './components/enterprise/all-enterprises/all-enterprises.component';
import { ClientNameComponent } from './components/client/client-name/client-name.component';
import { ClientDetailsNameComponent } from './components/client/client-details-name/client-details-name.component';
import { EnterpriseNameComponent } from './components/enterprise/enterprise-name/enterprise-name.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "client/name",
    component: ClientNameComponent
  },
  {
    path:"clients",
    component: ClientComponent
  },
  {
    path: "client/:id",
    component: ClientIdComponent
  },
  {
    path: "cliente/:id/detalhes",
    component: ClientDetailsComponent
  },
  {
    path: "cliente/:id/empreendimento/nome",
    component: ClientDetailsNameComponent
  },
  {
    path: "enterprises",
    component: AllEnterprisesComponent
  },
  {
    path: "enterprise/name",
    component: EnterpriseNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
