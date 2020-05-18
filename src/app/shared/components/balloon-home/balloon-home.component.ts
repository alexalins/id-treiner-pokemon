import { Component, OnInit } from '@angular/core';
import { Treiner } from 'src/app/models/Treiner';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';

@Component({
  selector: 'app-balloon-home',
  templateUrl: './balloon-home.component.html',
  styleUrls: ['./balloon-home.component.css']
})
export class BalloonHomeComponent implements OnInit {

  treiner: Treiner = new Treiner();
  constructor(private store: Store<Bag>) { }

  ngOnInit() {
    this.store.subscribe(r => this.treiner = r['cart']['treiner']);
  }

}
