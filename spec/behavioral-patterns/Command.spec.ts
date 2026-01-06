import { Invoker } from '../../src/behavioral-patterns/command/Invoker.class';
import { Receiver } from '../../src/behavioral-patterns/command/Receiver.class';
import { Command } from '../../src/behavioral-patterns/command/Command.class';
import { myObject } from '../../src/helpers/myData';

describe('Command', () => {
  test('An invoker invokes a command, which is executed by a receiver.', () => {
    const invoker = new Invoker();

    const receiver = new Receiver();
    const command = new Command(receiver);

    expect(invoker.execute(command)).toBe(myObject);
  });
});
