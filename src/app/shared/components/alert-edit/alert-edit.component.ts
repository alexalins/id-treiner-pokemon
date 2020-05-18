import { Component, OnInit } from '@angular/core';
import { Treiner } from 'src/app/models/Treiner';
import { Store } from '@ngrx/store';
import { Treiner as addTreiner } from 'src/app/redux/Actions';

@Component({
  selector: 'app-alert-edit',
  templateUrl: './alert-edit.component.html',
  styleUrls: ['./alert-edit.component.css']
})
export class AlertEditComponent implements OnInit {

  treiner = new Treiner(); 
  constructor( private store: Store<Treiner>) { }

  ngOnInit() {
    
  }

  save() {
    this.store.dispatch(addTreiner(this.treiner));
  }
}
