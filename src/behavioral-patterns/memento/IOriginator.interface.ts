import { Memento } from './Memento.class';
import { IState } from './IState.interface';

export interface IOriginator {
  state: IState;

  createMemento(): Memento;

  restore(memento: Memento): void;
}
