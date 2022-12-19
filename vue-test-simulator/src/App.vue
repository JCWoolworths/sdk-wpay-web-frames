<template>
  <img alt="Vue logo" id="App-logo" src="./assets/logo.png" />
  <EverydayPay />
</template>

<script>
import EverydayPay from "./components/EverydayPay.vue";

export default {
  name: "App",
  components: {
    EverydayPay,
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: column;
}

#App-logo {
  height: 40vmin;
}
</style>
