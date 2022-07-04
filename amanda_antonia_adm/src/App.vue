<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  /*padding: 2rem;*/
  height: 100vh;

  font-weight: normal;
}

a {
  color: white;
  text-decoration: none;
}

header {
  background-color: #D3C1D7 ;
  color: rgb(255, 255, 255);
  height: 20%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}
</style>
