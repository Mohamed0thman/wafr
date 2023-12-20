export type Transaction = {
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  description: string;
};
