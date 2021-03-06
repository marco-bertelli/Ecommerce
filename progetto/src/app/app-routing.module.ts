import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registrazione', loadChildren: () => import('./features/registrazione/registrazione.module').then(m => m.RegistrazioneModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'customize/:id', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) },
  { path: 'carrello', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
