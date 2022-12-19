import { useEffect } from "react";
import FramesSDK from "@w-pay/sdk-wpay-edpay-web-frames";
import logo from "./logo.svg";
import "./App.css";

const BASE_URLS = {
  Local: "http://localhost:4000",
  Dev: "https://dev.mobile-api.woolworths.com.au",
};

function App() {
  useEffect(() => {
    const EverydayPay = FramesSDK.widgets.everydayPay.new({
      elementId: "everyday-pay-sdk",
      accessToken: "6jewKIsWh9yDqApwVcHCv1J7mj3p",
      apiKey: "jVFxCbli459dNGLajUhsIZKrJJjThOpY",
      baseURL: BASE_URLS.Local,
      shopperId: "1100000000093129999",
      username: "1100000000093129999",
      toggleGiftCardHandler: (on) => {
        console.log("GIFT CARDS APPLIED!!!");
        // alert("Gift cards applied");
      },
      selectBankCardHandler: (creditCard: CreditCard) => {
        console.log(`CARD WITH SUFFIX ${creditCard.cardSuffix} APPLIED`);
        // alert(`CARD WITH SUFFIX ${creditCard.cardSuffix} APPLIED`);
      },
      hasBorder: true,
    });
    EverydayPay.render();
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        gap: "100px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <main
        id="everyday-pay-sdk"
        style={{ display: "flex", justifyContent: "center", width: "20px" }}
      ></main>
    </div>
  );
}

export default App;
