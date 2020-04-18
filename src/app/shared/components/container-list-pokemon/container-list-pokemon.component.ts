import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokeApiService } from '../../services/pokeApi.service';
import { Pokemon } from 'src/app/models/pokemon';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';
import { Add, List, Count } from 'src/app/redux/Actions';


@Component({
  selector: 'app-container-list-pokemon',
  templateUrl: './container-list-pokemon.component.html',
  styleUrls: ['./container-list-pokemon.component.css']
})
export class ContainerListPokemonComponent implements OnInit {

  constructor(
    private pokeService: PokeApiService,
    private store: Store<Bag>
  ) { }
  pokemons: Pokemon[] = [];
  searchPokemon: string;

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(
      res => {
        this.pokemons = res["results"];
        console.log(this.pokemons);
      },
      error => console.log(error)
    );

  }

  async add(pokemon: Pokemon) {
    this.store.dispatch(Add(pokemon));
  }
}