import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
   }

  public get collection(): Item[] {
    return this._collection;
  }

  public set collection(col: Item[]) {
    this._collection = col;
  }


}
