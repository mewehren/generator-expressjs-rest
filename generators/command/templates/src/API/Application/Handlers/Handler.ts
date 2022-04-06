import <%= options.command %>Command from '../../Commands/<%= options.prefix %><%= options.command %>Command';

export default class <%= options.command %>Handler {

  public async  handle(command : <%= options.command %>Command) {
    // Bussines logic
    console.info("<%= options.command %>Command");
  }
}
