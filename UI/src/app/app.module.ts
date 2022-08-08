import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { OwnerModule } from './owner/owner.module';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    OwnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
