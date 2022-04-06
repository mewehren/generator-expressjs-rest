import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import <%= options.model %> from '../../Domain/Entities/<%= options.model %>';

/**
 * @package <%= options.model %>Services
 * 
 * @email <contacto@prixel.ar>
 */
export default class <%= options.model %>Services {
  private <%= options.modelInstance %>Repository : any<<%= options.model %>>;

  constructor() {
  }

  public async find(options?) {
    
    return await this.<%= options.modelInstance %>Repository.find(options);
  }

  public async getAll() {
    
    return await this.<%= options.modelInstance %>Repository.find();
  }

  public async findOne(conditions) {
    return await this.<%= options.modelInstance %>Repository.findOne(conditions);
  }

  public async getById(id: number) {
    const <%= options.modelInstance %> = await this.<%= options.modelInstance %>Repository.find( { where : { id } } );

    if (!<%= options.modelInstance %> ) {
      throw new NotFoundEntityException(`<%= options.model %> with id: ${id} not found`);
    }

    return <%= options.modelInstance %>;
  }

  public async store(<%= options.modelInstance %>: <%= options.model %>) {
    return await this.<%= options.modelInstance %>Repository.save(<%= options.modelInstance %>);
  }

  public async update(<%= options.modelInstance %>: <%= options.model %>) {

    const affected = await this.<%= options.modelInstance %>Repository.update();

    return affected;
  }

  public async destroy(id: number) {
    const affected = await this.<%= options.modelInstance %>Repository.delete(id);

    return affected;
  }
}
