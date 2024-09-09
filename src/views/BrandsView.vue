<template>
  <div class="container">
    <div class="row">
        <app-brands></app-brands>
    </div>
  </div>
</template>

<script setup>
import AppBrands from '@/components/brand/AppBrands.vue';
</script>

<style scoped>
  .container{
    width: 99.9%;
    max-height: 100%;
    background: linear-gradient(black, rgb(69, 68, 68));
    border: 1px solid black;
  }
  .row{
    width: 1440px;
    margin: 0 auto;
  }
</style>