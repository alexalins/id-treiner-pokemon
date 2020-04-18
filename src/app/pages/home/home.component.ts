import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bag } from 'src/app/models/Bag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<Bag>,
  ) { }

  ngOnInit() {
  }

}
