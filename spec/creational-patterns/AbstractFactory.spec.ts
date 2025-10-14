import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { MyClass } from '../../src/helpers/MyClass.class';
import { myObject } from '../../src/helpers/myData';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const factory = AbstractFactory.createFactory(MyClass);
    const product = factory.create(myObject);

    expect(product.data).toBe(myObject);
  });
});
