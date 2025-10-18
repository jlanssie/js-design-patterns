import { MediatorImpl } from '../../src/behavioral-patterns/mediator/MediatorImpl.class';
import { MediatedImpl } from '../../src/behavioral-patterns/mediator/MediatedImpl.class';
import { myObject } from '../../src/helpers/myData';
import { thirdPartyObject } from '../../src/helpers/thirdPartyData';

describe('Mediator', () => {
  test('A mediator uses an implementation to perform actions against another implementation.', () => {
    const mediator = new MediatorImpl();
    const mediated = new MediatedImpl(mediator, myObject);
    const mediatedAlternative = new MediatedImpl(mediator, thirdPartyObject);

    mediator.addMediated(mediated);
    mediator.addMediated(mediatedAlternative);

    expect(mediated.method(thirdPartyObject)).toStrictEqual({
      myData: myObject,
      thirdPartyData: thirdPartyObject,
    });

    expect(mediatedAlternative.method(myObject)).toStrictEqual({
      myData: thirdPartyObject,
      thirdPartyData: myObject,
    });

    expect(mediator.method(mediated, thirdPartyObject)).toStrictEqual([
      { myData: myObject, thirdPartyData: thirdPartyObject },
    ]);

    expect(mediator.method(mediatedAlternative, myObject)).toStrictEqual([
      { myData: thirdPartyObject, thirdPartyData: myObject },
    ]);

    mediator.removeMediated(mediatedAlternative);

    expect(mediator.getMediateds().length).toBe(1);
  });
});
