import { ICommand } from './ICommand.interface';

export class Invoker {
  execute(command: ICommand): any {
    return command.execute();
  }
}
