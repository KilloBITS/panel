import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
/* Import redux */
import {reducers, metaReducers} from './reducers';
/* Pages */
import {MainComponent} from './pages/main/main.component';
import {TournamentsComponent} from './pages/tournaments/tournaments.component';
import {NewsComponent} from './pages/news/news.component';
/* includes */
import { InstrumentsTournamentComponent } from './pages/tournaments/instruments/instrumentsTournament.component';
import { InstrumentsShopComponent } from './pages/shop/instruments/instrumentsShop.component';

import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {AddTournamentComponent} from './pages/tournaments/add-tournament/add-tournament.component';
import {ShopComponent} from './pages/shop/shop.component';
import { ChartComponent } from './components/chart/chart.component';
import { BlockComponent } from './components/block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TournamentsComponent,
    NewsComponent,
    InstrumentsTournamentComponent,
    AddTournamentComponent,
    ShopComponent,
    InstrumentsShopComponent,
    ChartComponent,
    BlockComponent
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
export class AppModule {
}
