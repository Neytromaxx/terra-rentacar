<script setup>
// import AppSlider from "@/components/ui/AppSlider.vue";
import AppCars from "@/components/cars/AppCars.vue";
import BrandsView from "./BrandsView.vue";
import ServiceView from "./ServiceView.vue";
import LuxInfo from "@/components/rent infos/LuxInfo.vue";
import SportInfo from "@/components/rent infos/SportInfo.vue";
import FaqView from "./FaqView.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="info">
        <h1>{{ t('home.rent')}}</h1>
        <h1>№1</h1>
        <p>{{ t('home.rent-info')}}</p>
        <p class="info_link">
          <router-link to="/cars">{{ t('home.catalog') }} </router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path fill="#fbf9f9" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
          </svg></p>
      </div>
      <!-- <app-slider></app-slider> -->
    </div>
      <brands-view></brands-view>
    <div class="row">
      <app-cars></app-cars> 
    </div>  
      
    
    <service-view></service-view>
    <lux-info></lux-info>
    <sport-info></sport-info>
    <faq-view></faq-view>
  </div>
  
</template>

<style scoped>
  .container{
    width: 99.9%;
    max-height: 100%;
    background: linear-gradient(rgb(10, 10, 19) 10%, #303030 20%, #000, #393939);
    border: 1px solid black;
  }
  .row{
    max-width: 1440px;
    margin: 0 auto;
  }

  .info{
    text-align: center;
    color: #fff;
    margin-top: 70px;
  }

  h1{
    font-size: 32px;
    font-weight: bold;
  }

  .info_link{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all .2s ease;
    cursor: pointer;
  }

  .info_link:hover a{
    color: red;
    transform: translateX(-10px);
    transition: transform .7s ease;
  }

  .info_link:hover svg path{
    fill: red;
  }
  
  .info_link:hover svg{
    transform: translateX(10px);
    transition: transform .7s ease;
  }

  .info_link a{
    color: #fff;
    text-decoration: none;
  }

  .info_link svg{
    width: 30px;
  }
</style>
