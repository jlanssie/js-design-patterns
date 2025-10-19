import { myObject } from '../helpers/myData';
import { IMyInterface } from '../helpers/IMyInterface.interface';
import { MyClass } from '../helpers/MyClass.class';

/**
 * Class representing a Composite pattern.
 */
export class Composite implements IMyInterface {
  data: any;
  children: MyClass[];

  constructor() {
    this.children = [];
  }

  add = (composite: MyClass): void => {
    this.children.push(composite);
  };

  remove = (composite: MyClass): any => {
    this.children = this.children.filter((child) => child !== composite);
  };

  getChildren = (): any => {
    return this.children;
  };

  method = (): any => {
    return myObject;
  };
}
