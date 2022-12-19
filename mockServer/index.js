const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // v1.0.5
const upload = multer();
const {
  singleExpiredCreditCard,
  noExpiredCreditCard,
  creditAndGiftCards,
  updateGiftCards,
} = require("./wallet");
const cards = require("./giftCards");

const app = express();
const port = 4000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, x-everyday-pay-wallet, authorization, x-channel, x-api-key, x-message-id, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

app.get("/edpay/customer/wallet", (req, res) => {
  res.send({
    data: {
      everydayPay: creditAndGiftCards(),
      // everydayPay: singleExpiredCreditCard(),
      // everydayPay: noExpiredCreditCard(),
    },
    meta: {},
  });
});

app.post("/idm/server/token", (req, res) => {
  res.send({
    accessToken: "kuzgZXFZ7ZI14nlhK1w9NhtcnyOW",
    accessTokenExpiresIn: 3599,
    refreshToken: "huegNxBAiw4QsNUZwexRbuudq2FYmcJj",
    refreshTokenExpiresIn: 2591999,
    tokensIssuedAt: 1663562030188,
    isGuestToken: false,
    idmStatusOK: false,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/edpay/customer/giftcard/tokenize", async (req, res) => {
  const cardNumber = req.body.data.cardNumber;

  console.log("cardNumber = ", cardNumber);
  console.log("Cards: ", cards);

  const card = cards[cardNumber];

  console.log("Card: ", card);
  if (card.body.data && card.body.data.balance) {
    await updateGiftCards({
      balanceDetail: {
        balance: card.body.data.balance,
      },
    });
  }

  res.status(card.statusCode).send(card.body);
});
