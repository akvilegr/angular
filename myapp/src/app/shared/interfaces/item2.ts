import { State } from "../enums/state.enum";

export interface Item2 {
  id: string;
  name: string;
  reference: string;
  state: State;
  dateLivraison: string;
}
