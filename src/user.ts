import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

export default mongoose.model("User", userSchema);