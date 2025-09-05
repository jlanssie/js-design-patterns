import { Adapter } from '../../src/structural-patterns/Adapter.class';

import { MyClass } from '../../src/MyClass.class';
import { ThirdPartyClass } from '../../src/ThirdPartyClass.class';
import { thirdPartyObject } from '../../src/thirdPartyData';
import { myObject } from '../../src/myData';

describe('Adapter', () => {
  test('An adapter adapts a valid Source object to a valid Target object', () => {
    const source = new ThirdPartyClass();
    source.data = thirdPartyObject;
    const target = new MyClass();

    Adapter.adapt(source, target);

    expect(target.data).toBe(thirdPartyObject);
  });

  test('An adapter adapts an invalid Source object to a new Target object.', () => {
    const source = thirdPartyObject;
    const target = new MyClass();

    Adapter.adapt(source, target);

    expect(target.data).toBe(myObject);
  });

  test('An adapter adapts an empty Source object to a new Target object.', () => {
    const target = new MyClass();

    Adapter.adapt(null, null);

    expect(target.data).toBe(myObject);
  });
});
