import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.css']
})
export class AlertViewComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  constructor() { }


  ngOnInit() {
  }

}
