import * as express from 'express';
import <%= options.model %>Controller from '../../Controllers/<%= options.model %>Controller';

const router = express.Router();

const <%= options.modelInstance %>Controller = new <%= options.model %>Controller();

// Index
router.get('/', (req, res, next) => {
  <%= options.modelInstance %>Controller.index(req, res, next);
});

// Create
router.post('/', (req, res, next) => {
  <%= options.modelInstance %>Controller.store(req, res, next);
});

// Show
router.get('/:id([0-9]+)', (req, res, next) => {
  <%= options.modelInstance %>Controller.show(req, res, next);
});

// Update
router.put('/:id([0-9]+)', (req, res, next) => {
  <%= options.modelInstance %>Controller.update(req, res, next);
});

// Delete
router.delete('/:id([0-9]+)', (req, res, next) => {
  <%= options.modelInstance %>Controller.destroy(req, res, next);
});

export default router;
