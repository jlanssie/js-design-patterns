export class Product {
  data: any;
  readonly factoryData: any;

  constructor(data: any = null, factoryData: any = null) {
    this.data = data;
    this.factoryData = factoryData;
  }
}
