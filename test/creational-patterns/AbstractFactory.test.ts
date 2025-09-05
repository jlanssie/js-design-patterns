import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { myClass } from '../../src/MyClass.class';
import { myObject } from '../../src/myData';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const factory = AbstractFactory.createFactory(myClass);
    const product = factory.create(myObject);

    expect(product.data).toBe(myObject);
  });
});
