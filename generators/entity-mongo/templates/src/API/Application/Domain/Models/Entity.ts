const mongoose = require('mongoose');

// Interface
export interface I<%= options.model %> extends Document {
  id: String;
}

const <%= options.model %>Schema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

export default mongoose.model('<%= options.model %>', <%= options.model %>Schema);
