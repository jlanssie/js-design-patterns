import { Proxy, Clazz } from '../src/Proxy.class';

describe('Proxy', () => {
  test('Proxy should mediate getting data from Clazz', () => {
    const clazz = new Clazz({ key: 'value' });
    expect(Proxy.getData(clazz)).toBe('{"key":"value"}');
  });

  test('Proxy should mediate setting data to Clazz', () => {
    const clazz = new Clazz();
    Proxy.setData(clazz, { key: 'value' });
    expect(clazz).toEqual({ data: { key: 'value' } });
  });
});
