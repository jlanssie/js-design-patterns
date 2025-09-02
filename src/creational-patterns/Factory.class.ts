/**
 * Class representing a factory pattern.
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
  static createProduct(data?: any): Product {
    return new Product(data, { createdBy: Factory.name });
  }
}
