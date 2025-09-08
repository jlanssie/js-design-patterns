export class ThirdPartySystem {
  data: any;

  constructor(
    data: any = { thirdPartySystemKey: 'Third-Party System key-value.' },
  ) {
    this.data = data;
  }

  method(data: any) {
    if (data && typeof data === 'object') {
      data.thirdPartySystemKey = 'Third-Party System method-value.';
      return data;
    }
  }
}
