import { HandlerOne } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerOne.class';
import { HandlerTwo } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerTwo.class';

describe('Chain of Responsibility', () => {
  test('A Chain of Responsibility allows an object to pass a request along a chain of handlers. Each handler in the chain decides either to process the request or to pass it along the chain to the next handler.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    handlerOne.setNextHandler(handlerTwo);

    expect(handlerOne.process('1')).toBe('Handled by HandlerOne');
    expect(handlerOne.process('2')).toBe('Handled by HandlerTwo');
    expect(() => handlerOne.process('3')).toThrow('Could not process request');
  });

  test('A Chain of Responsibility can reorganize its handlers.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    handlerTwo.setNextHandler(handlerOne);

    expect(handlerTwo.process('1')).toBe('Handled by HandlerOne');
    expect(handlerTwo.process('2')).toBe('Handled by HandlerTwo');
    expect(() => handlerOne.process('3')).toThrow('Could not process request');
  });

  test('A Chain of Responsibility should fail if a handler has no next handler.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    expect(() => handlerOne.process('2')).toThrow('Could not process request');
    expect(() => handlerTwo.process('3')).toThrow('Could not process request');
  });
});
