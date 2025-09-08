import { Subject } from '../../src/behavioral-patterns/Subject.class';
import { myObject, myString } from '../../src/helpers/myData';

describe('Subject', () => {
  test('Observers should be able to subscribe to a subject.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    // @ts-ignore
    subject.subscribe(observer1);

    // @ts-ignore
    subject.subscribe(observer2);

    expect(subject.observers.length).toBe(2);
  });

  test('Observers should be able to unsubscribe from a subject.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    // @ts-ignore
    subject.subscribe(observer1);

    // @ts-ignore
    subject.subscribe(observer2);

    // @ts-ignore
    subject.unsubscribe(observer1);

    expect(subject.observers.length).toBe(1);
    expect(subject.observers.includes(observer1)).toBe(false);
    expect(subject.observers.includes(observer2)).toBe(true);
  });

  test('Subscribed observers should be called on notify.', () => {
    const subject = new Subject();

    const observer1 = jest.fn();
    const observer2 = jest.fn();
    const observer3 = (data: any) => {
      return `data: ${data}`;
    };

    // @ts-ignore
    subject.subscribe(observer1);

    // @ts-ignore
    subject.subscribe(observer2);

    subject.subscribe(observer3);

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
