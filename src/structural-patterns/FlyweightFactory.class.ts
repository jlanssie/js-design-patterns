import { MyInterface } from '../helpers/MyInterface';
import { MyClass } from '../helpers/MyClass.class';
import { myEnum, myObject } from '../helpers/myData';
import { ThirdPartyClass } from '../helpers/ThirdPartyClass.class';

/**
 * Class representing a Flyweight pattern.
 */
export class FlyweightFactory {
  cache: Map<string, MyInterface>;

  constructor() {
    this.cache = new Map();
  }

  getObject = (type: string) => {
    if (this.cache.has(type)) {
      return this.cache.get(type);
    } else {
      let flyweight: MyInterface;

      switch (type) {
        case myEnum.MyClass:
          flyweight = new MyClass(myObject);
          break;
        case myEnum.ThirdPartyClass:
          flyweight = new ThirdPartyClass(myObject);
          break;
        default:
          throw new Error('Invalid type.');
      }

      this.cache.set(type, flyweight);
      return flyweight;
    }
  };
}
