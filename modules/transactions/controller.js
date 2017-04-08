import Transaction from "./model";

export const createTransaction = async (req, res) => {
  const { amount, memo } = req.body;
  const newTransaction = new Transaction({ amount, memo });

  try {
    return res.status(201).json({ transaction: await newTransaction.save() });
  } catch (err) {
    return res
      .status(err.status)
      .json({ error: true, message: "Error with Transaction" });
  }
};
