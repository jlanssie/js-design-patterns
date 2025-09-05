import { CustomObject } from '../src/CustomObject.class';
import { customData } from '../src/customData';

describe('Custom Object', () => {
  test('A custom object can be created with empty data.', () => {
    const product = new CustomObject();

    expect(product.data).toBeNull();
  });

  test('A custom object can be created with data.', () => {
    const product = new CustomObject(customData);

    expect(product.data).toBe(customData);
    expect(product.method()).toBe(customData);
  });
});
