const { Schema, model } = require("mongoose");

new ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'A thought is required!',
      min: [1, 'Thought must be at least 1 character long.'],
      maxlength: [280, 'Thought must be no longer than 280 characters.']
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: 'Username is required.'
    }
  }
)
