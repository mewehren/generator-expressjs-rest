import GetSingle<%= options.model %>Command from '../../Commands/<%= options.models %>/GetSingle<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';

export default class GetSingle<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
  }

  public async  handle(command : GetSingle<%= options.model %>Command) {
    return await this.<%= options.modelInstance %>Services.getById(command.getId());
  }
}
