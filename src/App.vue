<script setup>
// import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<!-- <template>
  <nav>
    <app-navbar></app-navbar>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <app-footer></app-footer>
  </footer>
</template> -->

<style scoped>
  /* *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  } */
  /* html, body{
    height: 100%;
    overflow: hidden;
  } */
</style>
