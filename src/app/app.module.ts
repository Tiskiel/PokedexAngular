import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePokemonComponent } from './components/liste-pokemon/liste-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CmToMPipe } from './shared/pipes/cm-to-m.pipe';
import { ValueToKiloPipe } from './shared/pipes/value-to-kilo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListePokemonComponent,
    PokemonComponent,
    CmToMPipe,
    ValueToKiloPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
