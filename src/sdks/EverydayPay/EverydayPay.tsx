import { useGetAccessToken } from "../../hooks/useGetAccessToken";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useGetWallet } from "../../hooks/usesGetWallet";
import { WalletAccessProvider } from "../../context/useWalletAccessContext";
import NewCustomer from "./NewCustomer";
import ExistingCustomer from "./ExistingCustomer";
import { EverydayPayWallet, CreditCard } from "../../types/wallet.types";

interface EverydayPayProps {
  rewardsToken?: string;
  accessToken?: string;
  apiKey: string;
  username: string;
  shopperId: string;
  toggleGiftCardHandler: (on: boolean) => any;
  selectBankCardHandler: (creditCard: CreditCard) => any;
  hasBorder: boolean;
}
const hasWallet = (wallet: EverydayPayWallet) =>
  wallet &&
  wallet.creditCards &&
  (wallet.creditCards.length > 0 || wallet.giftCards.length > 0);

const EverydayPay = ({
  rewardsToken,
  accessToken,
  apiKey,
  username,
  shopperId,
  toggleGiftCardHandler,
  selectBankCardHandler,
  hasBorder,
}: EverydayPayProps) => {
  const [token] = accessToken
    ? [accessToken]
    : useGetAccessToken(apiKey, rewardsToken, username, shopperId);
  const { wallet, refetch } = useGetWallet(apiKey, token);
  const addGiftCardHandler = () => {
    refetch();
  };

  return token ? (
    <DefaultLayout hasBorder={hasBorder}>
      <WalletAccessProvider apiKey={apiKey} accessToken={accessToken}>
        {hasWallet(wallet) ? (
          <ExistingCustomer
            wallet={wallet}
            toggleGiftCardHandler={toggleGiftCardHandler}
            selectBankCardHandler={selectBankCardHandler}
            addGiftCardHandler={addGiftCardHandler}
          />
        ) : (
          <NewCustomer />
        )}
      </WalletAccessProvider>
    </DefaultLayout>
  ) : null;
};

export default EverydayPay;
