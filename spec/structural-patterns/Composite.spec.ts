import { Composite } from '../../src/structural-patterns/Composite.class';
import { MyClass } from '../../src/helpers/MyClass.class';
import { myObject } from '../../src/helpers/myData';

describe('Composite', () => {
  test('Composite should represent part-whole hierarchies by allowing complex components to contain multiple leaf nodes or other compositions.', () => {
    // The Composite acts as the 'whole', managing its 'parts'
    const composite = new Composite();
    const leaf = new MyClass();
    const anotherLeaf = new MyClass();

    // The pattern provides an interface for managing child components
    composite.add(leaf);
    composite.add(anotherLeaf);
    composite.remove(anotherLeaf);

    expect(composite.getChildren().length).toBe(1);
    expect(composite.getChildren()).toContain(leaf);
  });

  test('Composite should allow clients to treat individual leaf objects and compositions uniformly through a common interface.', () => {
    const composite = new Composite();
    const leaf = new MyClass();

    composite.add(leaf);

    // The client interacts with the Composite and the Leaf using the same method call.
    // The Composite typically delegates the operation to its children.
    expect(composite.getChildren().length).toBe(1);
    expect(composite.getChildren()).toContain(leaf);

    // Uniformity: calling 'method()' works the same way regardless of the object's complexity
    expect(composite.method()).toBe(myObject);
    expect(composite.getChildren()[0].method()).toBe(myObject);
  });
});
