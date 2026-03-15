import { IIterator } from './IIterator.interface';

export interface ICollection {
  add(item: any): void;

  remove(item: any): void;

  createIterator(): IIterator;
}
