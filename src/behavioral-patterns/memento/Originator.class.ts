import { IOriginator } from './IOriginator.interface';
import { Memento } from './Memento.class';
import { IState } from './IState.interface';

export class Originator implements IOriginator {
  state: IState;

  constructor() {
    this.state = {
      data: '',
      additionalData: '',
    };
  }

  setState(state: IState) {
    this.state = state;
  }

  public createMemento(): Memento {
    return new Memento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
  }
}
