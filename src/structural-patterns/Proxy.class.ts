/**
 * Class representing a Proxy pattern.
 */

export class Clazz {
  data: object;

  constructor(data: any = {}) {
    this.data = data;
  }
}

export class Proxy {
  static getData(clazz: Clazz): string {
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

  static setData(clazz: Clazz, data: any): void {
    if (data && typeof data === 'object') {
      clazz.data = data;
    } else {
      throw new Error('data argument is not an object.');
    }
  }
}
