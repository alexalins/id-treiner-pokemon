import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BalloonHomeComponent } from './shared/components/balloon-home/balloon-home.component';
import { ContainerHomeComponent } from './shared/components/container-home/container-home.component';
import { ContainerListPokemonComponent } from './shared/components/container-list-pokemon/container-list-pokemon.component';
import { CardTrainerComponent } from './shared/components/card-treiner/card-treiner.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoreModule } from '@ngrx/store';
import { pokeReducer } from '../app/redux/PokeReducer';
import { AlertBagComponent } from './shared/components/alert-bag/alert-bag.component';
import { AlertEditComponent } from './shared/components/alert-edit/alert-edit.component';
import { AlertViewComponent } from './shared/components/alert-view/alert-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //
    BalloonHomeComponent,
    ContainerHomeComponent,
    ContainerListPokemonComponent,
    CardTrainerComponent, 
    AlertBagComponent,
    AlertEditComponent,
    AlertViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({
      cart: pokeReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
