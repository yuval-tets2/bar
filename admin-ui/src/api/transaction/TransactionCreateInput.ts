import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
