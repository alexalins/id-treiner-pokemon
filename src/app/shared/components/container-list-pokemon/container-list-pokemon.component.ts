import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/pokeApi.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-container-list-pokemon',
  templateUrl: './container-list-pokemon.component.html',
  styleUrls: ['./container-list-pokemon.component.css']
})
export class ContainerListPokemonComponent implements OnInit {

  constructor(private pokeService: PokeApiService) { }
  pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(
      res => {
        this.pokemons = res["results"];
        console.log(this.pokemons);
      },
      error => console.log(error)
    );
    
  }

}
