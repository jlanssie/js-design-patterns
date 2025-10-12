import {Composite} from "../../src/structural-patterns/Composite.class";
import {MyClass} from "../../src/helpers/MyClass.class";

describe('Composite', () => {
  test('A Composite should be able to contain multiple Leaf classes', () => {
    const composite = new Composite();
    const leaf = new MyClass();

    composite.add(leaf);

    expect(composite.getChildren().length).toBe(1);
    expect(composite.getChildren()).toContain(leaf);
  });
});
