import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  memo: {
    type: String,
    required: false
  }
});

export default mongoose.model("Transaction", TransactionSchema);
