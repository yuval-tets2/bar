import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCustomersInput;
};
