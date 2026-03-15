import { IState } from './IState.interface';

export class Memento {
  state: IState;

  constructor(state: any) {
    this.state = state;
  }

  getState(): any {
    return this.state;
  }
}
