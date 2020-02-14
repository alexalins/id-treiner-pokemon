import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BalloonHomeComponent } from './shared/components/balloon-home/balloon-home.component';
import { ContainerHomeComponent } from './shared/components/container-home/container-home.component';
import { ContainerListPokemonComponent } from './shared/components/container-list-pokemon/container-list-pokemon.component';
import { CardTrainerComponent } from './shared/components/card-trainer/card-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //
    BalloonHomeComponent,
    ContainerHomeComponent,
    ContainerListPokemonComponent,
    CardTrainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
