import * as Joi from 'joi';

export const Store<%= options.model %>Schema = {
  // sample: Joi.string()
  //   .min(3)
  //   .max(150)
  //   .required()
};


export const Update<%= options.model %>Schema = {
  id: Joi.number()
    .min(0)
    .required()
};

export const Upsert<%= options.model %>Schema = {
  id: Joi.number()
    .min(0)
    .required()
};
