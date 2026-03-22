import { Collection } from '../../src/behavioral-patterns/iterator/Collection.class';
import {
  myBoolean,
  myEnum,
  myNumber,
  myObject,
  myString,
} from '../../src/helpers/myData';
import { Iterator } from '../../src/behavioral-patterns/iterator/Iterator.class';

describe('Iterator', () => {
  test('An iterator', () => {
    const collection = new Collection();
    collection.add(myString);
    collection.add(myNumber);
    collection.add(myBoolean);
    collection.add(myObject);
    collection.add(myEnum);
    collection.remove(myEnum);

    const iterator = collection.createIterator();

    let firstResult = 0;
    while (iterator.hasNext()) {
      const item = iterator.next();
      console.log(item);
      firstResult++;

      if (item === myNumber) {
        iterator.remove();
      }
    }

    expect(firstResult).toBe(3);

    let secondResult = 0;
    while (iterator.hasNext()) {
      const item = iterator.next();
      console.log(item);
      secondResult++;
    }

    expect(secondResult).toBe(3);
  });

  test('An iterator constructor', () => {
    const iterator = new Iterator();
    expect(iterator).toBeInstanceOf(Iterator);
    expect(iterator.hasNext()).toBe(false);
  });
});
