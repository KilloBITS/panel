import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { NewsComponent } from './pages/news/news.component';
import { ShopComponent } from './pages/shop/shop.component';

import { AuthGuard } from './_guard/AuthGuard';

const routes: Routes = [
  { path: 'login', component: AuthComponent},
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'tournaments', component: TournamentsComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
