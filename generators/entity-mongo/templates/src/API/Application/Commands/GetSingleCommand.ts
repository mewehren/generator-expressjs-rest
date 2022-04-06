import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';

export class GetSingle<%= options.model %>{

}

export default class GetSingle<%= options.model %>Command extends Command {

  id : number;
  // TODO : Define Command parameters

  private validator: Validator;

  constructor(id : number) {
    super();
    this.id = id;

    // TODO Initialize command parameters
  }

  getId() {
    return this.id;
  }
}
