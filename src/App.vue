<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "./store/index";
const store = useStore();
console.log(store);

setTimeout(() => {
  store.countPlusOne();
}, 2000);
setTimeout(() => {
  store.countPlus(20);
}, 3000);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>{{ store.count }}</div>
  <div>{{ store.countPow2Getter }}</div>
  <div>{{ store.countPow2 }}</div>
  <div>{{ store.otherStoreCount }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
