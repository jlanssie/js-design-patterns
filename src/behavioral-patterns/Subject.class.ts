/**
 * Class representing an Observer pattern.
 */
export class Subject {
  observers: any[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: Function) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer(data));
  }
}
