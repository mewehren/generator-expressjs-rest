import Update<%= options.model %>Command from '../../Commands/<%= options.models %>/Update<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';
import <%= options.model %> from '../../Domain/Models/<%= options.model %>';
import { Update<%= options.model %>Schema } from '../../../Controllers/Schemas/<%= options.model %>Schema'
import Validator from '../../../Common/Validator';
import RequiredFieldException from '../../Exceptions/RequiredFieldException'

export default class Update<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;
  private validator : Validator;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
    this.validator = new Validator();
  }


  private validate(command){
    const error = this.validator.validate(command, Update<%= options.model %>Schema);

    if(error) {
      const details = this.validator.validationResult(error.details)
      throw new RequiredFieldException(this.validator.validationResult(error.details));
    }
  }

  public async  handle(command : Update<%= options.model %>Command) {
    this.validate(command);
    const <%= options.modelInstance %> = new <%= options.model %>(command);
    return await this.<%= options.modelInstance %>Services.update(<%= options.modelInstance %>);
  }
}
