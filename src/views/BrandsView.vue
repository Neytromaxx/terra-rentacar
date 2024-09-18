<template>
  <div class="container">
    <div class="row">
      <h1>Brands</h1>
      <div class="flexbox">
        <app-brands v-for="item in brands.data" :key="item.id" :brand="item"></app-brands>
      </div>
    </div>
  </div>
  <div class="cleaner"></div>
</template>

<script setup>
import AppBrands from '@/components/brand/AppBrands.vue';
import { onMounted, ref } from 'vue';

const brands = ref([])

    const fetchBrands = async()=>{
        try{
            const res = await fetch('https://realauto.limsa.uz/api/brands')
            brands.value = await res.json()
            console.log(brands.value)
        }catch(error){
            console.error(error)
        }
    }

    onMounted(fetchBrands)
</script>

<style scoped>
  .container{
    width: 99.9%;
    max-height: 100%;
    background: linear-gradient(#0b0b13, #222225);
    /* background-color: transparent; */
    border: 1px solid #1e1e22;
  }

  .cleaner{
    clear: both;
  }

  .row{
    max-width: 1440px;
    margin: 0 auto;
    color: #ffe;
  }
  h1{
    color: #fff;
    font-size: 32px;
    padding-left: 10px;
  }

  .flexbox{
    display: flex;
    flex-wrap: wrap;
  }
</style>