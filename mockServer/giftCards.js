const cards = {
  "12345678901234567002": {
    statusCode: 200,
    body: {
      data: {
        giftCard: {
          paymentInstrumentId: "81054",
          status: "UNVERIFIED_PERSISTENT",
          lastUpdated: "2017-10-26T06:35:09.083Z",
          lastUsed: "2017-10-12T02:25:49.770Z",
          primary: true,
          allowed: true,
          programName: "WISH Gift Card",
          cardSuffix: "2517",
        },
        balance: 333.4,
        expiryDay: "31",
        expiryMonth: "03",
        expiryYear: "2018",
        expired: false,
      },
    },
  },
  "9876543210987654321": {
    statusCode: 422,
    body: {
      errorCode: "EDP-001",
      errorMessage: "Card expired",
      errorDetail: "Request instrument is expired",
    },
  },
  "1122334455667788991": {
    statusCode: 422,
    body: {
      errorCode: "EDP-002",
      errorMessage: "Card limit exceeded",
      errorDetail: "Card exceeds the allowed limit",
    },
  },
  "1111111111111111111": {
    statusCode: 422,
    body: {
      errorCode: "EDP-003",
      errorMessage: "Invalid card",
      errorDetail: "Card details are invalid",
    },
  },
};

module.exports = cards;
