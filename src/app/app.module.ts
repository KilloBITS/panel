import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
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

import { Globals } from './globals';
import { AuthGuard } from './_guard/AuthGuard';
import { InputComponent } from './components/input/input.component';
import { AuthComponent } from './pages/auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { AddProductComponent } from './pages/shop/add-product/add-product.component';

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
    BlockComponent,
    InputComponent,
    AuthComponent,
    TasksComponent,
    TextareaComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    ReactiveFormsModule
  ],
  providers: [
    Globals,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
