import { Builder } from '../../src/creational-patterns/Builder.class';
import { myObject } from '../../src/helpers/myData';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Builder', () => {
  describe('Construction of Parts', () => {
    test('Builder should provide an abstract interface for creating parts of a complex object, allowing for step-by-step assembly.', () => {
      const object: any = {};

      // The Builder encapsulates the logic of how a specific part (data) is added to the product
      Builder.addKeyValue(object);

      expect(object.data).toBe(myObject);
    });

    test('Builder should allow for the dynamic addition of complex behaviors or methods to the product representation.', () => {
      const object: any = {};

      // Different "build steps" can configure the internal representation of the object
      // without the client knowing the details of the assembly.
      Builder.addKeyMethod(object);

      expect(object.method()).toEqual(myObject);
    });
  });
});
