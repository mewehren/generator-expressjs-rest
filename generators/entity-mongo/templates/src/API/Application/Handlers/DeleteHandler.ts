import Delete<%= options.model %>Command from '../../Commands/<%= options.models %>/Delete<%= options.model %>Command';
import <%= options.model %>Services from '../../Services/<%= options.models %>/<%= options.model %>Services';

export default class Delete<%= options.model %>Handler {
  private <%= options.modelInstance %>Services: <%= options.model %>Services;

  constructor() {
    this.<%= options.modelInstance %>Services = new <%= options.model %>Services();
  }

  public async  handle(command : Delete<%= options.model %>Command) {
    return await this.<%= options.modelInstance %>Services.destroy(command.getId());
  }
}
