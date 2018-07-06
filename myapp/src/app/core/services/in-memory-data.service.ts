import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from '../../shared/enums/state.enum';
import { Item2 } from '../../shared/interfaces/item2';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
    const ITEMS: Item2[] = [
      {
        id: 'a1',
        name: 'John',
        reference: '1245',
        state: State.ALIVRER,
        dateLivraison: '2018-07-08T11:00:00+01:00'
      },
      {
        id: 'b1',
        name: 'William',
        reference: '5698',
        state: State.ENCOURS,
        dateLivraison: '2018-07-06T15:00:00+01:00'
      },
      {
        id: 'c1',
        name: 'Juliette',
        reference: '3697',
        state: State.LIVREE,
        dateLivraison: '2018-07-01T10:57:31+01:00'
      }
    ];
    return {ITEMS};
  }
}
