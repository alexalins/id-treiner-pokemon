import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/pokeApi.service';
import { Pokemon } from 'src/app/models/pokemon';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';
import { Add, Remove } from 'src/app/redux/Actions';


@Component({
  selector: 'app-container-list-pokemon',
  templateUrl: './container-list-pokemon.component.html',
  styleUrls: ['./container-list-pokemon.component.css']
})
export class ContainerListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];
  searchPokemon: string;
  isDisabled: boolean = false;
  AuxPokemons: Pokemon[] = [];

  constructor(
    private pokeService: PokeApiService,
    private store: Store<Bag>
  ) { }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(
      res => {
        this.pokemons = res["results"];
      },
      error => console.log(error)
    );
  }

  clear() {
    this.searchPokemon = null;
  }

  add(pokemon: Pokemon) {
    this.store.subscribe(r => this.AuxPokemons = r['cart']['pokemons']);
    if (!this.isExist(pokemon)) {
      if (!this.isFull()) {
        this.store.dispatch(Add(pokemon));
      } else {
        alert("Bag Full");
      }
    } else {
      this.store.dispatch(Remove(pokemon));
    }
  }

  isExist(pokemon: Pokemon): boolean {
    let value = false;
    this.AuxPokemons.forEach(p => {
      if (p.name == pokemon.name) {
        value = true;
      }
    });
    return value;
  }
  
  isFull(): boolean {
    let value = true;
    if (this.AuxPokemons.length <= 5) {
      value = false;
    }
    return value;
  }
}
