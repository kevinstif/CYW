import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { LinkScannerComponent } from './pages/link-scanner/link-scanner.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { DefinitionCardComponent } from './definition-card/definition-card.component';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { CasesCardComponent } from './cases-card/cases-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkScannerComponent,
    FrontPageComponent,
    NavBarComponent,
    DefinitionPageComponent,
    DefinitionCardComponent,
    CasesPageComponent,
    CasesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
