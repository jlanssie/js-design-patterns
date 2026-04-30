import { Singleton } from '../../src/creational-patterns/Singleton.class';

describe('Singleton', () => {
  test('Singleton should ensure that a class has only one instance throughout the lifetime of the application.', () => {
    // Regardless of how many times the instantiation logic is invoked,
    // the pattern guarantees that a single unique instance is managed.
    const instanceOne = new Singleton('Hello, World!');
    const instanceTwo = new Singleton('Hello, World!!');
    const instanceThree = new Singleton('Hello, World!!!');

    expect(instanceOne).toBe(instanceTwo);
    expect(instanceTwo).toBe(instanceThree);
    expect(instanceThree).toBe(instanceOne);
  });

  test('Singleton should initialize the instance only once, providing a consistent global state regardless of subsequent access attempts.', () => {
    // The internal state is captured during the first "creation" call.
    // Subsequent calls return the original instance without re-initializing it.
    const instanceOne = new Singleton('Hello, World!');
    const instanceTwo = new Singleton('Hello, World!!');
    const instanceThree = new Singleton('Hello, World!!!');

    expect(instanceOne.immutableData).toBe('Hello, World!');
    expect(instanceTwo.immutableData).toBe('Hello, World!');
    expect(instanceThree.immutableData).toBe('Hello, World!');
  });

  test('Singleton should provide a global point of access to its state, ensuring all references act upon the same shared instance.', () => {
    const instanceOne = new Singleton();
    instanceOne.data = 'Hello, World!';

    const instanceTwo = new Singleton();
    instanceTwo.data = 'Hello, World!!';

    const instanceThree = new Singleton();
    instanceThree.data = 'Hello, World!!!';

    // Because there is only one instance, modifying data through any
    // reference affects the global state visible to all other references.
    expect(instanceOne.data).toBe('Hello, World!!!');
    expect(instanceTwo.data).toBe('Hello, World!!!');
    expect(instanceThree.data).toBe('Hello, World!!!');
  });
});
