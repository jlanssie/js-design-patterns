import { Builder } from '../../src/creational-patterns/Builder.class';
import { myObject } from '../../src/helpers/myData';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Builder', () => {
  describe('addKeyMethod', () => {
    test('A Builder can add a key-value pair to the object', () => {
      const object: any = {};

      Builder.addKeyValue(object);

      expect(object.data).toBe(myObject);
    });
  });

  describe('addMethod', () => {
    test('A Builder can add a key-method pair to the object', () => {
      const object: any = {};

      Builder.addKeyMethod(object);

      object.method();

      expect(object.method()).toEqual(myObject);
    });
  });
});
