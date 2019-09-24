import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('File', FileSchema);
