/**
 * Class representing a subject in an Observer pattern.
 */
export class Subject {
  observers: any[];

  constructor() {
    this.observers = [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  subscribe(observer: Function) {
    this.observers.push(observer);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  unsubscribe(observer: Function) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer(data));
  }
}
