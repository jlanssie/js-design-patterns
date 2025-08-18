/**
 * Class representing a factory pattern.
 */
export class Product {
  private data: any;
  private readonly factoryData: any;

  constructor(data: any = null, factoryData: any = null) {
    this.data = data;
    this.factoryData = factoryData;
  }

  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }

  getFactoryData(): any {
    return this.factoryData;
  }
}

export class Factory {
  static create(data?: any): Product {
    return new Product(data, { createdBy: Factory.name });
  }
}
