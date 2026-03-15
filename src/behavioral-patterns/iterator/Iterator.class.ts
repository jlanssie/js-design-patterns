import { IIterator } from './IIterator.interface';

export class Iterator implements IIterator {
  private readonly items: any[];
  private position: number = 0;

  constructor(items: any[] = []) {
    this.items = items;
  }

  hasNext(): boolean {
    if (this.items.length > this.position) {
      return true;
    } else {
      this.position = 0;
      return false;
    }
  }

  next(): any {
    this.position++;
    return this.items[this.position - 1];
  }

  remove(): void {
    this.items.splice(this.position - 1, 1);
  }
}
