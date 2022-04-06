import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import <%= options.model %> from '../../Domain/Entities/<%= options.model %>';
import { getRepository, Repository } from 'typeorm';

/**
 * @package <%= options.model %>Services
 * 
 * @email <contacto@prixel.ar>
 */
export default class <%= options.model %>Services {
  private <%= options.modelInstance %>Repository : Repository<<%= options.model %>>;

  constructor() {
  }

  public async getAll() {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);
    return await this.<%= options.modelInstance %>Repository.find();
  }

  public async findOne(conditions) {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);
    return await this.<%= options.modelInstance %>Repository.findOne(conditions);
  }

  public async getById(id: number) {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);
    const <%= options.modelInstance %> = await this.<%= options.modelInstance %>Repository.find( { where : { id } } );

    if (!<%= options.modelInstance %> ) {
      throw new NotFoundEntityException(`<%= options.model %> with id: ${id} not found`);
    }

    return <%= options.modelInstance %>;
  }

  public async store(<%= options.modelInstance %>: <%= options.model %>) {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);
    return await this.<%= options.modelInstance %>Repository.save(<%= options.modelInstance %>);
  }

  public async update(<%= options.modelInstance %>: <%= options.model %>) {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);

    const affected = await this.<%= options.modelInstance %>Repository.createQueryBuilder()
    .update(<%= options.model %>)
    .set(<%= options.modelInstance %>)
    .where('id = :id', { id : <%= options.modelInstance %>.getId() })
    .execute();

    return affected;
  }

  public async destroy(id: number) {
    this.<%= options.modelInstance %>Repository = getRepository(<%= options.model %>);
    const affected = await this.<%= options.modelInstance %>Repository.delete(id);

    return affected;
  }
}
