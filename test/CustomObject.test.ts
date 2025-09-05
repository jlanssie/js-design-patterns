import { CustomObject } from '../src/CustomObject.class';
import { customObject } from '../src/customData';

describe('Custom Object', () => {
  test('A custom object can be created with empty data.', () => {
    const product = new CustomObject();

    expect(product.data).toBe(customObject);
  });

  test('A custom object can be created with data.', () => {
    const product = new CustomObject(customObject);

    expect(product.data).toBe(customObject);
    expect(product.method()).toBe(customObject);
  });
});
