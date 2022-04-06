import Upsert<%= options.model %>Command from '../../Commands/<%= options.models %>/Upsert<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';
import <%= options.model %> from '../../Domain/Entities/<%= options.model %>';
import { Upsert<%= options.model %>Schema } from '../../../Controllers/Schemas/<%= options.model %>Schema'
import RequiredFieldException from '../../Exceptions/RequiredFieldException';
import Validator from '../../../Common/Validator';

export default class Upsert<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;
  private validator : Validator;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
    this.validator = new Validator();
  }

  private validate(command){
    const error = this.validator.validate(command, Upsert<%= options.model %>Schema);
    if(error) {
      const details = this.validator.validationResult(error.details)
      throw new RequiredFieldException(this.validator.validationResult(error.details));
    }
  }

  public async  handle(command : Upsert<%= options.model %>Command) {
    this.validate(command);
    const <%= options.modelInstance %> = new <%= options.model %>(command);
    const match = await this.<%= options.modelInstance %>Services.findOne({where : { id : <%= options.modelInstance %>.getId() } });
    if (match) <%= options.modelInstance %>.setId(match.getId());
    return await this.<%= options.modelInstance %>Services.store(<%= options.modelInstance %>);
  }

}
