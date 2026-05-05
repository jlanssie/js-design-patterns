import { Invoker } from '../../src/behavioral-patterns/command/Invoker.class';
import { Receiver } from '../../src/behavioral-patterns/command/Receiver.class';
import { Command } from '../../src/behavioral-patterns/command/Command.class';
import { myObject } from '../../src/helpers/myData';

describe('Command', () => {
  test('Command should encapsulate a request as an object, decoupling the object that invokes the operation from the one that knows how to perform it.', () => {
    // The Invoker (sender) knows only how to trigger a command
    const invoker = new Invoker();

    // The Receiver knows how to perform the actual work
    const receiver = new Receiver();

    // The Command object binds the Receiver to a specific action
    const command = new Command(receiver);
    invoker.setCommand(command);

    // The Invoker executes the request without knowing anything about the Receiver's interface
    expect(invoker.execute()).toBe(myObject);
  });

  test('Invoker should handle execution gracefully when no command is set.', () => {
    // The Invoker (sender) knows only how to trigger a command
    const invoker = new Invoker();

    // The Invoker executes the request without knowing anything about the Receiver's interface
    expect(invoker.execute()).toBe(null);
  });
});
