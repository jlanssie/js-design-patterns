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
  test('Iterator should provide a uniform interface for traversing an aggregate object while hiding its internal structure.', () => {
    // The Collection acts as the "Aggregate"
    const collection = new Collection();
    collection.add(myString);
    collection.add(myNumber);
    collection.add(myBoolean);
    collection.add(myObject);
    collection.add(myEnum);
    collection.remove(myEnum);

    // The iterator captures the traversal state independently of the collection
    const iterator = collection.createIterator();

    let firstResult = 0;
    while (iterator.hasNext()) {
      const item = iterator.next();
      firstResult++;

      // The pattern can also support modifications to the underlying aggregate during traversal
      if (item === myNumber) {
        iterator.remove();
      }
    }

    expect(firstResult).toBe(3);

    let secondResult = 0;
    while (iterator.hasNext()) {
      iterator.next();
      secondResult++;
    }

    expect(secondResult).toBe(3);
  });

  test('Iterator should maintain its own traversal state, allowing multiple independent iterations over the same aggregate.', () => {
    const iterator = new Iterator();
    expect(iterator).toBeInstanceOf(Iterator);
    expect(iterator.hasNext()).toBe(false);
  });
});
