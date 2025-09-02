import { Builder } from '../../src/creational-patterns/Builder.class';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Builder', () => {
  describe('addKeyMethod', () => {
    test('A Builder can add a key-value pair to the object', () => {
      // @ts-ignore
      jest.spyOn(console, 'info').mockImplementation();

      const object: any = {
        name: 'Test Object',
      };

      Builder.addKeyValue(object);

      expect(object.data).toBe('Key-Value added to the object.');
    });
  });

  describe('addMethod', () => {
    test('A Builder can add a key-method pair to the object', () => {
      // @ts-ignore
      jest.spyOn(console, 'info').mockImplementation();

      const object: any = {
        name: 'Test Object',
      };

      Builder.addKeyMethod(object);

      object.method();

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('Key-Method added to the object.'),
      );
    });
  });
});
