import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
