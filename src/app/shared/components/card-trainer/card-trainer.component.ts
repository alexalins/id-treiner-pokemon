import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';

@Component({
  selector: 'app-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.css']
})
export class CardTrainerComponent implements OnInit {

  constructor(private store: Store<Bag>) { }

  ngOnInit() {
    //this.store.subscribe( r => console.log(r)); 
  }

}
