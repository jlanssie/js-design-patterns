import { ThirdPartyClass } from '../ThirdPartyClass.class';
import { MyClass } from '../MyClass.class';

export class Adapter {
  static adapt(source: any, target: any): void {
    if (source && target) {
      if (source instanceof ThirdPartyClass && target instanceof MyClass) {
        target.data = source.data;
      }
    }
  }
}
