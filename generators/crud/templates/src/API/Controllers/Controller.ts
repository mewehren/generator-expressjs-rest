import Create<%= options.model %>Command from '../Application/Commands/<%= options.models %>/Create<%= options.model %>Command';
import GetAll<%= options.models %>Command from '../Application/Commands/<%= options.models %>/GetAll<%= options.models %>Command';
import GetSingle<%= options.model %>Command from '../Application/Commands/<%= options.models %>/GetSingle<%= options.model %>Command';
import Update<%= options.model %>Command from '../Application/Commands/<%= options.models %>/Update<%= options.model %>Command';
import Delete<%= options.model %>Command from '../Application/Commands/<%= options.models %>/Delete<%= options.model %>Command';

import InvalidArgumentException from '../Application/Exceptions/InvalidArgumentException';
import NotFoundEntityException from '../Application/Exceptions/NotFoundEntityException'

import { success, error } from '../Common/Result';
import Validator from '../Common/Validator';
import CommandBus from '../Application/Commands/CommandBus';
import * as _ from 'lodash';

export default class <%= options.model %>Controller {
  private validator: Validator;

  constructor() {
    this.validator = new Validator();
  }

  public async index(request, response, next) {
    try {
      const command = new GetAll<%= options.models %>Command();
      const result = await CommandBus.handle(command);

      return response.status(200).json(success(result, '<%= options.model %> list retrieve', 200));
    } catch (e) {
      e.collection = '<%= options.model %>';
      next(e);
    }
  }

  public async store(request, response, next) {
    try {
      const command = new Create<%= options.model %>Command(request.body);

      const result = await CommandBus.handle(command);

      return response.status(201).json(success(result, '<%= options.model %> created', 201));
    } catch (e) {
      next(e)
    }
  }

  public async show(request, response, next) {
    try {
      if (!request.params.id) {
        throw new InvalidArgumentException("<%= options.model %>'s Id is required");
      }

      const command = new GetSingle<%= options.model %>Command(request.params.id);

      const result = await CommandBus.handle(command);

      return response.status(200).json(success(result, '<%= options.model %> retrieved', 200));
    } catch (e) {
      next(e);
    }
  }

  public async update(request, response, next) {
    try {
      // const command = new UpdateModelCommand( _.assign(request.body, {id: request.params.id}) );
      // const affected = await CommandBus.handle(command);
      let httpResponseCode;


      const command = new Update<%= options.model %>Command(  _.assign(request.body, {id: request.params.id})  );

      const affected = await CommandBus.handle(command);

      if (affected.raw.affectedRows && affected.raw.changedRows) {
        // Container has been updated successfully
        httpResponseCode = 200;
      } else if (affected.raw.affectedRows && !affected.raw.changedRows) {
        // Container exists but was not modify
        httpResponseCode = 409;
      } else if (!affected.raw.affectedRows && !affected.raw.changedRows) {
        // No container has been found
        throw new NotFoundEntityException(`<%= options.model %> with Id ${command.getId()} not found`);
      }else if (!affected.raw.affectedRows && affected.raw.changedRows) {
        // Imposible combination, just to cover all posibilities
        httpResponseCode = 501;
      }

      /* This response can be status 204 No-Content without body */
      return response.status(httpResponseCode).json({
        data: {},
        message: affected.raw.message, // 'Container modified',
        code: httpResponseCode,
      });

      // return response.status(200).json(success(result, '<%= options.model %> updated', 200));
    } catch (e) {
      next(e);
    }
  }

  public async destroy(request, response, next) {
    try {
      const command = new Delete<%= options.model %>Command( request.params.id );
      const affected = await CommandBus.handle(command);

      let httpResponseCode;

      if (affected.raw.affectedRows && !affected.raw.changedRows) {
        // Entity deleted
        httpResponseCode = 200;
      } else if (affected.raw.affectedRows && affected.raw.changedRows) {
        // WierdCombination
        httpResponseCode = 409;
      } else if (!affected.raw.affectedRows && !affected.raw.changedRows) {
        // No container has been found
        throw new NotFoundEntityException(`<%= options.model %> with Id ${command.getId()} not found`);
      }else if (!affected.raw.affectedRows && affected.raw.changedRows) {
        // Imposible combination, just to cover all posibilities
        httpResponseCode = 501;
      }

      /* This response can be status 204 No-Content without body */
      return response.status(httpResponseCode).json({
        data: {},
        message: affected.raw.message, // 'Container modified',
        code: httpResponseCode,
      });
    } catch (e) {
      next(e);
    }
  }
}
