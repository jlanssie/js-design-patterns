import { Composite } from '../../src/structural-patterns/Composite.class';
import { MyClass } from '../../src/helpers/MyClass.class';
import { myObject } from '../../src/helpers/myData';

describe('Composite', () => {
  test('A Composite should be able to contain multiple child Leaf classes', () => {
    const composite = new Composite();
    const leaf = new MyClass();
    const anotherLeaf = new MyClass();

    composite.add(leaf);
    composite.add(anotherLeaf);
    composite.remove(anotherLeaf);

    expect(composite.getChildren().length).toBe(1);
    expect(composite.getChildren()).toContain(leaf);
  });

  test('A Composite and its child Leafs should be able to use the methods from their common interface', () => {
    const composite = new Composite();
    const leaf = new MyClass();

    composite.add(leaf);

    expect(composite.getChildren().length).toBe(1);
    expect(composite.getChildren()).toContain(leaf);
    expect(composite.method()).toBe(myObject);
    expect(composite.getChildren()[0].method()).toBe(myObject);
  });
});
