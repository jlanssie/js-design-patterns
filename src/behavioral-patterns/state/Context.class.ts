import { IState } from './IState.interface';
import { StateOne } from './StateOne.class';
import { StateTwo } from './StateTwo.class';

export class Context {
  private state: IState;

  constructor() {
    this.state = new StateOne();
  }

  getState(): IState {
    return this.state;
  }

  setState(state: IState): void {
    this.state = state;
  }

  changeState(state: IState): void {
    if (state instanceof StateOne) {
      this.setState(new StateTwo());
    }

    if (state instanceof StateTwo) {
      this.setState(new StateOne());
    }
  }

  method(): any {
    const result = this.state.handleMethod();

    this.changeState(this.state);

    return result;
  }
}
