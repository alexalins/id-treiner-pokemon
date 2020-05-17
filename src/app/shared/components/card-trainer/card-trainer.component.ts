import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.css']
})
export class CardTrainerComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private store: Store<Bag>) { }

  ngOnInit() {
    this.store.subscribe(r => this.pokemons = r['cart']['pokemons']);
    console.log(this.pokemons.length)
  }

}
