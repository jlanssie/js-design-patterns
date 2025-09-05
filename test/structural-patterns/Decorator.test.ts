import { Decorator } from '../../src/structural-patterns/Decorator.class';
import { customObject } from '../../src/customData';

describe('Decorator', () => {
  test('A decorator should be able to add a value to an object', () => {
    const object = {};
    const decorator = new Decorator(object);

    expect(decorator.object).toBe(object);
    expect(decorator.data).toEqual({ decoratedBy: 'Decorator' });
  });

  test('A decorator should be able to add a method to an object', () => {
    const object = {};
    const decorator = new Decorator(object);

    expect(decorator.object).toBe(object);
    expect(decorator.method()).toEqual(customObject);
  });
});
