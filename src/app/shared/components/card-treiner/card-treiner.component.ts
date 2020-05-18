import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';
import { Pokemon } from 'src/app/models/pokemon';
import { Treiner } from 'src/app/models/Treiner';
import { Clear } from 'src/app/redux/Actions';

@Component({
  selector: 'app-card-trainer',
  templateUrl: './card-treiner.component.html',
  styleUrls: ['./card-treiner.component.css']
})
export class CardTrainerComponent implements OnInit {
  pokemons: Pokemon[] = [];
  treiner: Treiner = new Treiner();

  constructor(
    private store: Store<Bag>,
  ) { }

  ngOnInit() {
    this.store.subscribe(r => this.pokemons = r['cart']['pokemons']);
    this.store.subscribe(r => this.treiner = r['cart']['treiner']);
  }

  clear() {
    this.store.dispatch(Clear());
  }
}
