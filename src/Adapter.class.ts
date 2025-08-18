export class Source {
  sourceData?: string;

  constructor(sourceData: string | undefined = undefined) {
    this.sourceData = sourceData;
  }
}

export class Target {
  targetData?: string;

  constructor(targetData: string | undefined = undefined) {
    this.targetData = targetData;
  }
}

export class Adapter {
  static adapt(source: any, target: any): any {
    if (source && target) {
      if (source instanceof Source && target instanceof Target) {
        target.targetData = source.sourceData;
        return target;
      }
    } else {
      return source;
    }
  }
}
