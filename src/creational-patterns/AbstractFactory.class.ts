/**
 * Class representing an abstract factory pattern.
 */
export class Product {
  data: any;
  readonly factoryData: any;

  constructor(data: any = null, factoryData: any = null) {
    this.data = data;
    this.factoryData = factoryData;
  }
}

export class Factory {
  private readonly productClass: any;

  constructor(productClass: any = null) {
    this.productClass = productClass;
  }

  createProduct(data?: any): any {
    if (this.productClass) {
      try {
        return new this.productClass(data, {
          createdBy: this.productClass.name + 'Factory',
        });
      } catch (error) {
        console.error(`Error. Faulty product class for factory.`);
      }
    }
  }
}

export class AbstractFactory {
  static createFactory(productClass?: any): any {
    return new Factory(productClass);
  }
}
