import { ThirdPartyClass } from '../src/ThirdPartyClass.class';
import { thirdPartyObject } from '../src/thirdPartyData';

describe('MyClass', () => {
  test('An object can be created with empty data.', () => {
    const object = new ThirdPartyClass();

    expect(object.data).toBe(thirdPartyObject);
  });

  test('An object can be created with data.', () => {
    const object = new ThirdPartyClass(thirdPartyObject);

    expect(object.data).toBe(thirdPartyObject);
    expect(object.method()).toBe(thirdPartyObject);
  });
});
