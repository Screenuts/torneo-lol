import { TorneoModule } from './features/torneo/torneo.module';
import { UsernameModule } from './features/username/username.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/start/start.module').then(m => m.StartModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./features/start/start.module').then(m => m.StartModule)
  },
  {
    path: 'username',
    loadChildren: () => import('./features/username/username.module').then(m => m.UsernameModule)
  },
  {
    path: 'torneo',
    loadChildren: () => import('./features/torneo/torneo.module').then(m => m.TorneoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
