import { HandlerOne } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerOne.class';
import { HandlerTwo } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerTwo.class';

describe('Chain of Responsibility', () => {
  test('Chain of Responsibility should decouple the sender from the receivers by passing the request along a chain of candidate objects until one handles it.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    handlerOne.setNextHandler(handlerTwo);

    // The sender interacts only with the first handler in the chain
    expect(handlerOne.process('1')).toBe('Handled by HandlerOne');
    expect(handlerOne.process('2')).toBe('Handled by HandlerTwo');
    expect(() => handlerOne.process('3')).toThrow('Could not process request');
  });

  test('Chain of Responsibility should allow dynamic reordering of the chain to change handling priorities or responsibilities.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    // Reconfiguring the chain structure at runtime
    handlerTwo.setNextHandler(handlerOne);

    expect(handlerTwo.process('1')).toBe('Handled by HandlerOne');
    expect(handlerTwo.process('2')).toBe('Handled by HandlerTwo');
  });

  test('Chain of Responsibility should provide a default behavior (or exception) when a request reaches the end of the chain without being handled.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    // Testing the "implicit receiver" logic: if no handler claims it, the request falls through
    expect(() => handlerOne.process('2')).toThrow('Could not process request');
    expect(() => handlerTwo.process('3')).toThrow('Could not process request');
  });
});
