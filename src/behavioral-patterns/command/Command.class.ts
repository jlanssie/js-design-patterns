import { ICommand } from './ICommand.interface';
import { IReceiver } from './IReceiver.interface';

/**
 * Implementation of a ICommand interface.
 * This Command represents an action, e.g., open a file, close a file, make a call, etc.
 */
export class Command implements ICommand {
  private readonly receiver: IReceiver;

  constructor(receiver: IReceiver) {
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.command();
  }
}
