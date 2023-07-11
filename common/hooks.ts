import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { CustomerWalletResType, getCustomerWallet } from "./api";

export const useWallet = () => {
  const auth = useAuth();
  const [wallet, setWallet] = useState<CustomerWalletResType | null>(null);

  useEffect(() => {
    auth?.user?.mobile &&
      !wallet &&
      getCustomerWallet(auth.user.mobile).then((res) => {
        setWallet(res);
      });
  }, [auth?.user]);

  return wallet;
};
