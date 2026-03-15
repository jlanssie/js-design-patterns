import { Originator } from '../../src/behavioral-patterns/memento/Originator.class';
import { myObject, myString } from '../../src/helpers/myData';
import {
  thirdPartyObject,
  thirdPartyString,
} from '../../src/helpers/thirdPartyData';
import { Caretaker } from '../../src/behavioral-patterns/memento/Caretaker.class';

describe('Memento', () => {
  test('A memento.', () => {
    const originator = new Originator();
    originator.setState({ data: myObject, additionalData: myString });

    const caretaker = new Caretaker();
    caretaker.addMemento(originator.createMemento());

    originator.setState({
      data: thirdPartyObject,
      additionalData: thirdPartyString,
    });

    expect(originator.state.additionalData).toBe(thirdPartyString);

    originator.restore(caretaker.getMemento());

    expect(originator.state.additionalData).toBe(myString);
  });
});
