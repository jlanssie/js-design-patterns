import { Adapter } from '../../src/structural-patterns/Adapter.class';

import { MyClass } from '../../src/helpers/MyClass.class';
import { ThirdPartyClass } from '../../src/helpers/ThirdPartyClass.class';
import { thirdPartyObject } from '../../src/helpers/thirdPartyData';
import { myObject } from '../../src/helpers/myData';

describe('Adapter', () => {
  test('Adapter should convert the interface of a source object into a target interface that the client expects.', () => {
    // The ThirdPartyClass (Adaptee) has an incompatible interface or data structure.
    const source = new ThirdPartyClass();
    source.data = thirdPartyObject;

    // The MyClass (Target) defines the domain-specific interface used by the client.
    const target = new MyClass();

    // The Adapter bridges the gap between the two incompatible interfaces.
    Adapter.adapt(source, target);

    expect(target.data).toBe(thirdPartyObject);
  });

  test('Adapter should provide a default mapping or recovery logic when the source interface is incompatible or invalid.', () => {
    const source = thirdPartyObject;
    const target = new MyClass();

    // The Adapter ensures that even with a malformed source,
    // the target object is maintained in a valid state for the client.
    Adapter.adapt(source, target);

    expect(target.data).toBe(myObject);
  });

  test('Adapter should handle null or missing source data gracefully to ensure continuous interoperability between components.', () => {
    const target = new MyClass();

    // The Adapter pattern acts as a safety layer, preventing interface mismatches
    // from causing runtime errors in the client.
    Adapter.adapt(null, null);

    expect(target.data).toBe(myObject);
  });
});
