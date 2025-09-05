import { MySystem } from '../MySystem.class';
import { ThirdPartySystem } from '../ThirdPartySystem.class';

/**
 * Class representing a Facade pattern.
 */
export class Facade {
  data: any;
  aggregatedData = () => this.aggregateData();
  systems: any[];

  constructor(data: any = null) {
    this.data = data;
    this.systems = [new MySystem(), new ThirdPartySystem()];
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
