import { MyClass } from '../helpers/MyClass.class';

/**
 * Class representing a Proxy pattern.
 */
export class Proxy {
  static getData(clazz: MyClass): string {
    if (clazz.data) {
      try {
        return JSON.stringify(clazz.data);
      } catch {
        throw new Error('clazz argument data cannot be stringified.');
      }
    } else {
      throw new Error('clazz argument has no data.');
    }
  }

  static setData(clazz: MyClass, data: any): void {
    if (data && typeof data === 'object') {
      clazz.data = data;
    } else {
      throw new Error('data argument is not an object.');
    }
  }
}
