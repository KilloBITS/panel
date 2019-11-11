import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Import redux */
import { reducers, metaReducers } from './reducers';
/* Pages */
import { MainComponent } from './pages/main/main.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { NewsComponent } from './pages/news/news.component';
/* includes */
import { InstrumentsComponent } from './pages/tournaments/instruments/instruments.component';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TournamentsComponent,
    NewsComponent,
    InstrumentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
