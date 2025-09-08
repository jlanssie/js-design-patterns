export class MySystem {
  data: any;

  constructor(data: any = { systemKey: 'System key-value.' }) {
    this.data = data;
  }

  method(data: any) {
    if (data && typeof data === 'object') {
      data.system = 'System method-value.';
      return data;
    }
  }
}
