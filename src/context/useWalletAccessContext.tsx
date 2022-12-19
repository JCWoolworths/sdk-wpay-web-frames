import { createContext, useContext } from "react";

interface WalletAccessCredentials {
  accessToken: string;
  apiKey: string;
}

interface WalletAccessProviderProps extends WalletAccessCredentials {
  children: React.ReactNode;
}

const WalletAccessContext = createContext<WalletAccessCredentials>({
  accessToken: "",
  apiKey: "",
});

export const useWalletAccessContext = () => {
  const walletAccessContext = useContext(WalletAccessContext);

  if (!walletAccessContext) {
    throw Error(
      "useWalletAccessContext must be used inside WalletAccessProvider"
    );
  }
  return walletAccessContext;
};

export const WalletAccessProvider = ({
  apiKey,
  accessToken,
  children,
}: WalletAccessProviderProps) => {
  return (
    <WalletAccessContext.Provider value={{ apiKey, accessToken }}>
      {children}
    </WalletAccessContext.Provider>
  );
};
