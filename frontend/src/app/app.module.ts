import { EnterpriseNameModule } from './components/enterprise/enterprise-name/enterprise-name.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutingModule } from "./app-routing.module";
import { HeadersModule } from './components/template/header/header.module';
import { NavModule } from './components/template/nav/nav.module';
import { AppComponent } from "./app.component";
import { PagesModule } from './pages/pages.module';
import { ClientIdModule } from './components/client/client-id/client-id.module';
import { ClientDetailsModule } from './components/client/client-details/client-details.module';
import { AllEnterprisesModule } from './components/enterprise/all-enterprises/all-enterprises.module';
import { ClientNameModule } from "./components/client/client-name/client-name.module";
import { ClientDetailsNameModule } from './components/client/client-details-name/client-details-name.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HeadersModule,
    NavModule,
    PagesModule,
    ClientIdModule,
    ClientDetailsModule,
    AllEnterprisesModule,
    ClientNameModule,
    ClientDetailsNameModule,
    EnterpriseNameModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
