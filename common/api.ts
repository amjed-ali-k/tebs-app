import axios from "../context/axios";

export interface CustomerWalletResType {
  totAmount: number;
  totAmountAlloted: number;
  mobileNumber: string;
  walletDetails: WalletDetail[];
}

export interface WalletDetail {
  amount: number;
  amountAlloted: number;
  usrId: number;
  businessEntityType: number;
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

export const baseUrl = "http://tebsdemoserver.westindia.cloudapp.azure.com:170";

export const getCustomerWallet = async (phoneNumber: string) => {
  //axios get call with params
  const response = await axios.get<CustomerWalletResType>(
    `https://pulzconnectindiapre.tebs.co.in/api/v1/SWAP/wallet/${phoneNumber}`
  );
  return response.data;
};
