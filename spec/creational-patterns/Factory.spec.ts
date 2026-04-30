import { MyClass } from '../../src/helpers/MyClass.class';
import { Factory } from '../../src/creational-patterns/Factory.class';
import { myObject } from '../../src/helpers/myData';

describe('Factory', () => {
  test('Factory should return a null or undefined product when no concrete class is provided, deferring the instantiation logic.', () => {
    // The Factory acts as the creator but remains unconfigured
    const factory = new Factory();
    const product = factory.create(myObject);

    expect(product).toBeUndefined();
  });

  test('Factory should handle invalid product specifications gracefully, maintaining the integrity of the creation interface.', () => {
    jest.spyOn(console, 'error').mockImplementation();

    // The factory is parameterized with an invalid type, demonstrating that
    // the client is protected from direct instantiation failures.
    const factory = new Factory('InvalidProduct');
    const product = factory.create(myObject);

    expect(product).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error. Faulty product class for factory.'),
    );
  });

  test('Factory should encapsulate the instantiation logic, allowing the client to create products without knowing their concrete types.', () => {
    // By passing MyClass, we "decide" the concrete type at the factory level
    const factory = new Factory(MyClass);

    // The client calls 'create', decoupled from the 'new' keyword and the specific class name
    const product = factory.create(myObject);

    expect(product.data).toBe(myObject);
  });
});
