import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Item2 } from '../../shared/interfaces/item2';

@Injectable({
  providedIn: 'root'
})
export class Collection2Service {

  private _collection: Observable<Item2[]>;
  private url = 'api/ITEMS';  // URL to web api

  constructor( private http: HttpClient) {
    this.collection = this.http.get<Item2[]>(this.url);
  }

  public get collection(): Observable<Item2[]> {
    return this._collection;
  }

  public set collection(col: Observable<Item2[]>) {
    this._collection = col;
  }

/**
   * add item in collection
   */
  add(item: Item2): void {

      // .catch(error => console.log(error));
  }

  /**
   * update item in collection
   */
  update(item: Item2): void {

      // .catch(error => console.log(error));
  }

  /**
   * delete item in collection
   */
  delete(item: Item2): void {

      // .catch(error => console.log(error));
  }

}

