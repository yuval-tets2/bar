import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "name";

export const TransactionTitle = (record: TTransaction): string => {
  return record.name || record.id;
};
