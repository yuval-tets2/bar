import { Customer } from "../customer/Customer";

export type Transaction = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
