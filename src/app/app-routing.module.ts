import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePokemonComponent } from './components/liste-pokemon/liste-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'home', component: ListePokemonComponent },
  { path: 'home/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
