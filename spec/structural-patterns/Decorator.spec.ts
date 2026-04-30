import { Decorator } from '../../src/structural-patterns/Decorator.class';
import { myObject } from '../../src/helpers/myData';

describe('Decorator', () => {
  test('Decorator should dynamically attach additional responsibilities to an object at runtime, extending its state without modifying the original class.', () => {
    // The Decorator wraps the original object (Component)
    const decorator = new Decorator(myObject);

    // The decorator maintains a reference to the component and adds new data/behavior
    expect(decorator.object).toBe(myObject);
    expect(decorator.data).toEqual({ decoratedBy: 'Decorator' });
  });

  test('Decorator should conform to the interface of the object it decorates, allowing it to provide transparent extensions of functionality.', () => {
    const decorator = new Decorator(myObject);

    // The decorator delegates operations to the component while adding its own logic
    expect(decorator.object).toBe(myObject);

    // It provides the same interface (e.g., method()) but with the added "decorated" behavior
    expect(decorator.method()).toEqual(myObject);
  });
});
