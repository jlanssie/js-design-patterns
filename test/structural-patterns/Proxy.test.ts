import { Proxy } from '../../src/structural-patterns/Proxy.class';
import { MyClass } from '../../src/MyClass.class';

describe('Proxy', () => {
  test('Proxy should mediate getting data from Clazz', () => {
    const clazz = new MyClass({ key: 'value' });
    expect(Proxy.getData(clazz)).toBe('{"key":"value"}');
  });

  test('Proxy should mediate getting data from Clazz and throw an error if there is no data', () => {
    const clazz = new MyClass(null);
    expect(() => Proxy.getData(clazz)).toThrow('clazz argument has no data.');
  });

  test('Proxy should mediate getting data from Clazz and throw an error if JSON cannot be stringified', () => {
    const circularData = {};

    // @ts-ignore
    circularData.self = circularData;

    const clazz = new MyClass(circularData);

    expect(() => Proxy.getData(clazz)).toThrow(
      'clazz argument data cannot be stringified.',
    );
  });

  test('Proxy should mediate setting data to Clazz', () => {
    const clazz = new MyClass();
    Proxy.setData(clazz, { key: 'value' });
    expect(clazz).toEqual({ data: { key: 'value' } });
  });

  test('Proxy should throw an error for invalid data', () => {
    const clazz = new MyClass();

    expect(() => Proxy.setData(clazz, null)).toThrow(
      'data argument is not an object.',
    );
    expect(() => Proxy.setData(clazz, 'string')).toThrow(
      'data argument is not an object.',
    );
    expect(() => Proxy.setData(clazz, 123)).toThrow(
      'data argument is not an object.',
    );
  });
});
