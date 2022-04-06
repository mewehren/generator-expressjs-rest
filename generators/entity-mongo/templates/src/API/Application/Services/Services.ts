import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import <%= options.model %>Model from '../../Domain/Models/<%= options.model %>';
import mongoose from 'mongoose';

/**
 * @package <%= options.model %>Services
 * 
 * @email <contacto@prixel.ar>
 */
export default class <%= options.model %>Services {

  constructor() {
  }

  public async getAll() {
    return await <%= options.model %>Model.find();
  }

  public async findOne(conditions) {
    return await <%= options.model %>Model.findOne(conditions);
  }

  public async getById(id: number) {
    const <%= options.modelInstance %> = await <%= options.model %>Model.findOne({ "_id": id });

    if (!<%= options.modelInstance %> ) {
      throw new NotFoundEntityException(`<%= options.model %> with id: ${id} not found`);
    }

    return <%= options.modelInstance %>;
  }

  public async store(<%= options.modelInstance %>) {
    let newEntity = new <%= options.model %>Model(<%= options.modelInstance %>);
    try {
      return await newEntity.save();
    } catch (error) {
      console.log(error);
      throw new NotFoundEntityException(`<%= options.modelInstance %>: not available`);
    }
  }

  public async update(id, <%= options.modelInstance %>) {
    try {
      return await <%= options.model %>Model.updateOne({ "_id": id }, <%= options.modelInstance %>);
    } catch (error) {
      console.log(error);
      throw new NotFoundEntityException(`<%= options.modelInstance %>: not available`);
    }
  }

  public async destroy(id: number) {
    try {
      
      //return await <%= options.model %>Model.deleteOne({ "_id": id });
      let entityDeleted = await <%= options.model %>Model.updateOne({ "_id": id }, { enabled: false });

      return entityDeleted;
    } catch (error) {
      console.log(error);
      throw new NotFoundEntityException(`<%= options.modelInstance %>: not available`);
    }
  }
}
