import { CustomObject } from '../src/CustomObject.class';

describe('Custom Object', () => {
  test('A product can be created with empty data.', () => {
    const product = new CustomObject();

    expect(product.data).toBeNull();
  });

  test('A product can be created with data.', () => {
    const product = new CustomObject('Data');

    expect(product.data).toBe('Data');
  });
});
