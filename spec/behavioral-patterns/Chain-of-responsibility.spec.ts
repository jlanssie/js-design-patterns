import { HandlerOne } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerOne.class';
import { HandlerTwo } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerTwo.class';
import { HandlerMessageDTO } from '../../src/behavioral-patterns/chain-of-responsibility/HandlerMessage.class';

describe('Chain of Responsibility', () => {
  test('Chain of Responsibility should decouple the sender from the receivers by passing the request along a chain of handlers.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    handlerOne.setNextHandler(handlerTwo);

    const handlerMessage = new HandlerMessageDTO();

    expect(handlerOne.handle(handlerMessage).payload.data).toBe(
      'Handled by HandlerTwo',
    );
  });

  test('Chain of Responsibility should allow dynamic reordering of the chain to change handling priorities or responsibilities.', () => {
    const handlerOne = new HandlerOne();
    const handlerTwo = new HandlerTwo();

    // Reconfiguring the chain structure at runtime
    handlerTwo.setNextHandler(handlerOne);

    const handlerMessage = new HandlerMessageDTO();

    expect(handlerTwo.handle(handlerMessage).payload.data).toBe(
      'Handled by HandlerOne',
    );
  });
});
