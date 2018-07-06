import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  public collection: Observable<Item[]>;
  // public collection: Item[];
  // private sub: Subscription;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  //   this.collectionService.collection.subscribe((data) => {
  //    this.collection = data;
  //    console.log(data);
  // });

}

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
