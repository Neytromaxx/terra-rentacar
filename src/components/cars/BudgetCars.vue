<template>
  <div>
    <div v-for="car in cars" :key="car.id">
      <img :src="car.image" :alt="car.name" />
      <h3>{{ car.name }}</h3>
      <p>{{ car.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['cars'])
</script>

<style scoped>

</style>