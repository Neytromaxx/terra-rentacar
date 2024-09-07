<script setup>
import AppSlider from "@/components/ui/AppSlider.vue";
import AppCars from "@/components/cars/AppCars.vue"
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="info">
        <h1>TOP LUXURY CAR RENTAL EMIRATES</h1>
        <h1>№1</h1>
        <p>Best sports car & supercar rental Emirates, Exclusive offers on luxury car rental Emirates Cheap price</p>
        <p>RENT A CAR EMIRATES CATALOG ></p>
      </div>
      <app-slider></app-slider>
      <app-cars></app-cars>
    </div>
  </div>
  
</template>

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

  .info{
    text-align: center;
    color: #fff;
  }

  h1{
    font-size: 22px;
    font-weight: bold;
  }
</style>
