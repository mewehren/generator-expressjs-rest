import GetAll<%= options.models %>Command from '../../Commands/<%= options.models %>/GetAll<%= options.models %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';

export default class GetAll<%= options.models %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
  }

  public async  handle(command : GetAll<%= options.models %>Command) {
    // TODO: Implement bussines logic
    return await this.<%= options.modelInstance %>Services.getAll();
  }
}
