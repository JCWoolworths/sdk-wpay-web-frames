<template>
  <div id="everyday-pay-sdk">
    <H1>HOWZIT</H1>
  </div>
</template>

<script>
import FramesSDK from "@w-pay/sdk-wpay-edpay-web-frames";

const BASE_URLS = {
  Local: "http://localhost:4000",
  Dev: "https://dev.mobile-api.woolworths.com.au",
};

export default {
  name: "EverydayPay",
  mounted() {
    const EverydayPay = FramesSDK.widgets.everydayPay.new({
      elementId: "everyday-pay-sdk",
      accessToken: "2MGYCFaEgQqAsDbIXRJHWzGxY97m",
      apiKey: "jVFxCbli459dNGLajUhsIZKrJJjThOpY",
      baseURL: BASE_URLS.Dev,
      shopperId: "1100000000093129999",
      username: "1100000000093129999",
    });
    console.log("EverydayPay component is now mounted.", EverydayPay);
    EverydayPay.render();
  },
};
</script>
