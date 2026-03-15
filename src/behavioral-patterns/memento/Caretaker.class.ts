import { Memento } from './Memento.class';

export class Caretaker {
  private readonly mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  addMemento(memento: Memento) {
    this.mementos.push(memento);
  }

  getMemento(): Memento {
    return this.mementos[this.mementos.length - 1];
  }
}
