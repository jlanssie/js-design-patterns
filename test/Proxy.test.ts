import {Clazz, Proxy} from '../src/Proxy.class';

describe('Proxy', () => {
  test('Proxy should mediate getting data from Clazz', () => {
    const clazz = new Clazz({key: 'value'});
    expect(Proxy.getData(clazz)).toBe('{"key":"value"}');
  });

  test('Proxy should mediate getting data from Clazz and throw an error if there is no data', () => {
    const clazz = new Clazz(null);
    expect(() => Proxy.getData(clazz)).toThrow('clazz argument has no data.');
  });

  test('Proxy should mediate getting data from Clazz and throw an error if JSON cannot be stringified', () => {
    const circularData = {};

    // @ts-ignore
    circularData.self = circularData;

    const clazz = new Clazz(circularData);

    expect(() => Proxy.getData(clazz)).toThrow('clazz argument data cannot be stringified.');
  });

  test('Proxy should mediate setting data to Clazz', () => {
    const clazz = new Clazz();
    Proxy.setData(clazz, {key: 'value'});
    expect(clazz).toEqual({data: {key: 'value'}});
  });

  test('Proxy should throw an error for invalid data', () => {
    const clazz = new Clazz();

    expect(() => Proxy.setData(clazz, null)).toThrow('data argument is not an object.');
    expect(() => Proxy.setData(clazz, 'string')).toThrow('data argument is not an object.');
    expect(() => Proxy.setData(clazz, 123)).toThrow('data argument is not an object.');
  });
});
