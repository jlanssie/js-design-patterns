/**
 * Class representing a Factory pattern.
 */
export class Factory {
  private readonly productClass: any;

  constructor(productClass: any = null) {
    this.productClass = productClass;
  }

  create(data?: any): any {
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
