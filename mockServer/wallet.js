const fs = require("fs");
const fileName = "./wallet.json";

const fetchWallet = () => {
  const jsonString = fs.readFileSync(fileName);
  const wallet = JSON.parse(jsonString);

  return wallet;
};

const creditAndGiftCards = () => {
  const wallet = fetchWallet();

  return wallet.everydayPay;
};

const singleExpiredCreditCard = () => {
  const wallet = fetchWallet();

  return {
    ...wallet.everydayPay,
    creditCards: wallet.everydayPay.creditCards.filter((c) => c.expired),
  };
};

const noExpiredCreditCard = () => {
  const wallet = fetchWallet();

  return {
    ...wallet.everydayPay,
    creditCards: wallet.everydayPay.creditCards.map((c) => ({
      ...c,
      expired: false,
    })),
  };
};

const updateGiftCards = async (newGiftCard) => {
  const wallet = fetchWallet();

  const updatedWallet = {
    everydayPay: {
      ...wallet.everydayPay,
      giftCards: [...wallet.everydayPay.giftCards, newGiftCard],
    },
  };

  await fs.writeFile(
    fileName,
    JSON.stringify(updatedWallet),
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log("writing to " + fileName);
    }
  );
};

module.exports = {
  creditAndGiftCards,
  singleExpiredCreditCard,
  noExpiredCreditCard,
  updateGiftCards,
};
