import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { NewsComponent } from './pages/news/news.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', pathMatch: 'full', redirectTo: '/main'},
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
