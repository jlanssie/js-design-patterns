import { Originator } from '../../src/behavioral-patterns/memento/Originator.class';
import { myObject, myString } from '../../src/helpers/myData';
import {
  thirdPartyObject,
  thirdPartyString,
} from '../../src/helpers/thirdPartyData';
import { Caretaker } from '../../src/behavioral-patterns/memento/Caretaker.class';

describe('Memento', () => {
  test('Memento should capture and externalize an Originator’s internal state without violating encapsulation, allowing the state to be restored later.', () => {
    // The Originator is the object whose state we want to save
    const originator = new Originator();
    originator.setState({ data: myObject, additionalData: myString });

    // The Caretaker (e.g., an undo manager) requests a Memento
    // Note: The Caretaker never examines or operates on the contents of the Memento
    const caretaker = new Caretaker();
    caretaker.addMemento(originator.createMemento());

    // The Originator's state changes over time
    originator.setState({
      data: thirdPartyObject,
      additionalData: thirdPartyString,
    });

    expect(originator.state.additionalData).toBe(thirdPartyString);

    // The Originator restores its integrity by consuming the Memento provided by the Caretaker
    originator.restore(caretaker.getMemento());

    expect(originator.state.additionalData).toBe(myString);
  });
});
