import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialAppModule } from './ngmat/ngmat.module';

import { AppRoutingModule } from './app-routing.module'; // Provides app routing
import { AppComponent } from './app.component'; // Entry point into app
import { PagesModule } from './pages/pages.module'; // Provides app structure
import { NavModule } from './nav/nav.module'; // Provides navigation components


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAppModule,
    PagesModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
