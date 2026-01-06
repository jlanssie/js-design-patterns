import { IReceiver } from './IReceiver.interface';
import { myObject } from '../../helpers/myData';

/**
 * Implementation of a IReceiver interface.
 * This Receiver represents one of multiple potential receivers.
 */
export class Receiver implements IReceiver {
  command() {
    return myObject;
  }
}
