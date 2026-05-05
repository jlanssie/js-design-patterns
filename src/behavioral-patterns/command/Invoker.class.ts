import { ICommand } from './ICommand.interface';

export class Invoker {
  private command: ICommand | undefined;

  setCommand(command: ICommand): void {
    this.command = command;
  }

  execute(): any {
    if (this.command) {
      return this.command.execute();
    } else {
      return null;
    }
  }
}
