/**
 * Class representing a Facade pattern.
 */

//15,30-42

export class SystemA {
  data: any;

  constructor(data: any = { systemAKey: 'SystemA key-value.' }) {
    this.data = data;
  }

  method(data: any) {
    if (data && typeof data === 'object') {
      data.systemA = 'SystemA method-value.';
      return data;
    }
  }
}

export class SystemB {
  data: any;

  constructor(data: any = { systemBKey: 'SystemB key-value.' }) {
    this.data = data;
  }

  method(data: any) {
    if (data && typeof data === 'object') {
      data.systemB = 'SystemB method-value.';
      return data;
    }
  }
}

export class Facade {
  data: any;
  aggregatedData = () => this.aggregateData();
  systems: any[];

  constructor(data: any = null) {
    this.data = data;
    this.systems = [new SystemA(), new SystemB()];
  }

  method(): void {
    for (const system of this.systems) {
      this.data = system.method(this.data);
    }
  }

  aggregateData(): any {
    let aggregatedData: any = {};

    for (const system of this.systems) {
      aggregatedData = { ...aggregatedData, ...system.data };
    }

    return aggregatedData;
  }
}
