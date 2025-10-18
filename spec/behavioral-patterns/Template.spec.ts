import { Implementation } from '../../src/behavioral-patterns/template/Implementation.class';
import { myObject } from '../../src/helpers/myData';

describe('Template', () => {
  test("A Template should expose a templateMethod and its Implementation should adapt the templateMethod's behavior ", () => {
    const implementation = new Implementation();

    implementation.templateMethod(myObject);

    expect(implementation.getData()).toStrictEqual({
      privateData: myObject,
      publicData: myObject,
    });
  });
});
