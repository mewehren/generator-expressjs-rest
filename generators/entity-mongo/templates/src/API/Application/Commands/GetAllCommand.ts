import { Command } from 'simple-command-bus';

export default class GetAll<%= options.models %>Command extends Command {

  // TODO : Define Command parameters

  // private validator: Validator;
  //
  constructor() {
    super();
  //   // this.validator = new Validator();
  //   // this.validator.validate(body, store<%= options.model %>Schema);
  //
  //   // TODO Initialize command parameters
  }
}
