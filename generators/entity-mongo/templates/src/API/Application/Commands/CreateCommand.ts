import { Command } from 'simple-command-bus';
import * as _ from 'lodash';

export default class Create<%= options.model %>Command extends Command {

  constructor(body: Object) {
    super();
    _.assign(this, body);
  }
}
