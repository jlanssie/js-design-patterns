import { MediatorImpl } from '../../src/behavioral-patterns/mediator/MediatorImpl.class';
import { MediatedImpl } from '../../src/behavioral-patterns/mediator/MediatedImpl.class';
import { myObject } from '../../src/helpers/myData';
import { thirdPartyObject } from '../../src/helpers/thirdPartyData';

describe('Mediator', () => {
  test('Mediator should encapsulate complex interactions between colleagues, preventing them from referring to each other explicitly and promoting loose coupling.', () => {
    // The Mediator coordinates the workflow between various "Colleagues" (MediatedImpls)
    const mediator = new MediatorImpl();

    // Colleagues communicate only with the mediator, not directly with each other
    const mediated = new MediatedImpl(mediator, myObject);
    const mediatedAlternative = new MediatedImpl(mediator, thirdPartyObject);

    mediator.addMediated(mediated);
    mediator.addMediated(mediatedAlternative);

    // Interaction is routed through the mediator to resolve dependencies
    expect(mediated.method(thirdPartyObject)).toStrictEqual({
      myData: myObject,
      thirdPartyData: thirdPartyObject,
    });

    expect(mediatedAlternative.method(myObject)).toStrictEqual({
      myData: thirdPartyObject,
      thirdPartyData: myObject,
    });

    // The mediator centralizes the control logic for the entire group
    expect(mediator.method(mediated, thirdPartyObject)).toStrictEqual([
      { myData: myObject, thirdPartyData: thirdPartyObject },
    ]);

    expect(mediator.method(mediatedAlternative, myObject)).toStrictEqual([
      { myData: thirdPartyObject, thirdPartyData: myObject },
    ]);

    // Managing the group of colleagues dynamically without breaking their individual logic
    mediator.removeMediated(mediatedAlternative);
    expect(mediator.getMediateds().length).toBe(1);
  });
});
