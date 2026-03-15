import { ICollection } from './ICollection.interface';
import { IIterator } from './IIterator.interface';
import { Iterator } from './Iterator.class';

export class Collection implements ICollection {
  private items: any[];

  constructor(items: any[] = []) {
    this.items = items;
  }

  add(item: any): void {
    this.items.push(item);
  }

  remove(item: any) {
    this.items = this.items.filter((i) => i !== item);
  }

  createIterator(): IIterator {
    return new Iterator(this.items);
  }
}
