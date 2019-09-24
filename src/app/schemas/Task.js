import mongoose, { Schema } from 'mongoose';
import FileSchema from './Files';

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    customer: {
      type: String,
    },
    due_date: {
      type: Date,
    },
    legal_date: {
      type: Date,
    },
    status: {
      type: String,
    },
    fine: {
      type: Boolean,
      default: false,
    },
    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', TaskSchema);
