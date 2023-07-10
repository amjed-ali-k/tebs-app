import axios from "../context/axios";

export interface CustomerWalletResType {
  transaction: Transaction;
  walletDetails: WalletDetails;
}

export interface Transaction {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  id: number;
  userId: number;
  customerNumber: string;
  customerName: string;
  dispensorId: number;
  aldsStationId: number;
  aldsStationName: string;
  billAmount: number;
  customerRedeemedAmount: number;
  marshallRedeemedAmount: number;
  paidAmount: number;
  transactionCode: string;
  status: number;
}

export interface WalletDetails {
  amount: number;
  amountAlloted: number;
  userId: number;
  walletType: number;
}

const baseUrl = "http://tebsdemoserver.westindia.cloudapp.azure.com:170";

export const getCustomerWallet = async (customerId: string) => {
  //axios get call with params
  const response = await axios.get<CustomerWalletResType>(
    `${baseUrl}/api/ALDS/alds/getCustomerWallet`,
    {
      params: {
        customerId,
      },
    }
  );
  return response.data;
};
