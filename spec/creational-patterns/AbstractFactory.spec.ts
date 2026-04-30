import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { MyClass } from '../../src/helpers/MyClass.class';
import { myObject } from '../../src/helpers/myData';

describe('Abstract Factory', () => {
  test('Abstract Factory should provide an interface for creating families of related objects without specifying their concrete classes, ensuring consistency among products.', () => {
    // The AbstractFactory defines the interface for creation.
    // At runtime, we determine which concrete factory (represented by MyClass) to use.
    const factory = AbstractFactory.createFactory(MyClass);

    // The client interacts only with the abstract interface (the factory)
    // to get product instances, remaining decoupled from the specific implementation.
    const product = factory.create(myObject);

    expect(product.data).toBe(myObject);
    expect(product).toBeInstanceOf(MyClass);
  });
});
