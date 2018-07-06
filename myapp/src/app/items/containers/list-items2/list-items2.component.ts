import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item2 } from '../../../shared/interfaces/item2';
import { Collection2Service } from '../../../core/services/collection2.service';

@Component({
  selector: 'app-list-items2',
  templateUrl: './list-items2.component.html',
  styleUrls: ['./list-items2.component.css']
})
export class ListItems2Component implements OnInit {
  public collection: Observable<Item2[]>;

  constructor(private collection2Service: Collection2Service) { }

  ngOnInit() {
    this.collection = this.collection2Service.collection;
  }

}
