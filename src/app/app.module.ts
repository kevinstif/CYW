import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { LinkScannerComponent } from './pages/link-scanner/link-scanner.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { DefinitionCardComponent } from './components/definition-card/definition-card.component';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { CasesCardComponent } from './components/cases-card/cases-card.component';
import { CasesGraphComponent } from './components/cases-graph/cases-graph.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

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
    CasesCardComponent,
    CasesGraphComponent,
    StatsPageComponent
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
