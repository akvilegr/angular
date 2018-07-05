import { State } from 'src/app/shared/enums/state.enum';

export interface Item {
  id: string;
  name: string;
  reference: string;
  state: State;
  dateLivraison: string;
}
