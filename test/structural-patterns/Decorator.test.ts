import { Decorator } from '../../src/structural-patterns/Decorator.class';
import { myObject } from '../../src/helpers/myData';

describe('Decorator', () => {
  test('A decorator should be able to add a value to an object', () => {
    const decorator = new Decorator(myObject);

    expect(decorator.object).toBe(myObject);
    expect(decorator.data).toEqual({ decoratedBy: 'Decorator' });
  });

  test('A decorator should be able to add a method to an object', () => {
    const decorator = new Decorator(myObject);

    expect(decorator.object).toBe(myObject);
    expect(decorator.method()).toEqual(myObject);
  });
});
