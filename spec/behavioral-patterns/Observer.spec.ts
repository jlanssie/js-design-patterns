import { Subject } from '../../src/behavioral-patterns/observer/Subject.class';
import { myObject, myString } from '../../src/helpers/myData';

describe('Observer', () => {
  test('Observer should allow multiple objects to register as dependents of a subject, establishing a one-to-many relationship.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    // Registering observers defines the list of dependents that must stay in sync with the subject
    subject.subscribe(observer1);
    subject.subscribe(observer2);

    expect(subject.observers.length).toBe(2);
  });

  test('Observer should support dynamic detachment, allowing objects to stop watching a subject without affecting other dependents.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    subject.subscribe(observer1);
    subject.subscribe(observer2);

    // Removing a dependency ensures the observer is no longer notified of subject state changes
    subject.unsubscribe(observer1);

    expect(subject.observers.length).toBe(1);
    expect(subject.observers.includes(observer1)).toBe(false);
    expect(subject.observers.includes(observer2)).toBe(true);
  });

  test('Observer should automatically notify and update all registered dependents when the subject’s state changes.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();
    const observer3 = (data: any) => {
      return `data: ${data}`;
    };

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);

    // The Notify operation broadcasts the update to all observers to ensure data consistency
    subject.notify(myObject);

    expect(subject.observers.length).toBe(3);
    expect(observer1).toHaveBeenCalledTimes(1);
    expect(observer1).toHaveBeenCalledWith(myObject);
    expect(observer2).toHaveBeenCalledTimes(1);
    expect(observer2).toHaveBeenCalledWith(myObject);

    expect(observer3(myString)).toBe('data: ' + myString);
    expect(subject.observers[2](myString)).toBe('data: ' + myString);
  });
});
