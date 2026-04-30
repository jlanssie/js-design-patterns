import { Proxy } from '../../src/structural-patterns/Proxy.class';
import { MyClass } from '../../src/helpers/MyClass.class';

describe('Proxy', () => {
  test('Proxy should act as a surrogate to control access to the Real Subject, performing validation before retrieving data.', () => {
    // The Proxy intercepts the call to 'clazz' (the Real Subject)
    const clazz = new MyClass({ key: 'value' });

    // The client interacts with the Proxy rather than the Subject directly
    expect(Proxy.getData(clazz)).toBe('{"key":"value"}');
  });

  test('Proxy should provide a protection layer, ensuring that the Real Subject is only accessed when specific preconditions are met.', () => {
    const clazz = new MyClass(null);

    // The Protection Proxy prevents a null-pointer-style interaction with the Subject
    expect(() => Proxy.getData(clazz)).toThrow('clazz argument has no data.');
  });

  test('Proxy should encapsulate complex housekeeping logic, such as error handling during data transformation, without cluttering the Real Subject.', () => {
    const circularData = {};
    // @ts-expect-error TS2339: Property self does not exist on type {}
    circularData.self = circularData;

    const clazz = new MyClass(circularData);

    // The Proxy manages the complexity of serialization, shielding the client from internal failures
    expect(() => Proxy.getData(clazz)).toThrow(
      'clazz argument data cannot be stringified.',
    );
  });

  test('Proxy should mediate write access to the Real Subject, ensuring that the object state remains consistent with the domain rules.', () => {
    const clazz = new MyClass();

    // The Proxy controls the "setter" logic, acting as a gatekeeper for state changes
    Proxy.setData(clazz, { key: 'value' });
    expect(clazz).toEqual({ data: { key: 'value' } });
  });

  test('Proxy should perform validation and input sanitization, protecting the Real Subject from invalid or malicious state assignments.', () => {
    const clazz = new MyClass();

    // Smart Reference: The Proxy adds additional actions (validation) when an object is accessed
    expect(() => Proxy.setData(clazz, null)).toThrow(
      'data argument is not an object.',
    );
    expect(() => Proxy.setData(clazz, 'string')).toThrow(
      'data argument is not an object.',
    );
    expect(() => Proxy.setData(clazz, 123)).toThrow(
      'data argument is not an object.',
    );
  });
});
