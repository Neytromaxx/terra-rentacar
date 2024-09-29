<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>
<template>
  <div class="container">
    <div class="row">
      <p>
        <router-link to="/">Luxury Cars for Rent in Dubai / aboutUs</router-link>
      </p>
      <div class="text__about">
        <h1>{{ t('about.about') }}</h1>
        <p class="large">{{ t('about.welcome') }}</p>
        <p class="color">{{ t('about.adventure') }}</p> 
      </div>  
      <div class="text__why">
        <h1>{{ t('about.why') }}</h1>
        <p class="color"><b>{{ t('about.elegant') }}</b>{{ t('about.elegant-n') }}</p>
        <p class="color"><b>{{ t('about.tran') }}</b>{{ t('about.tran-n') }}</p>
        <p class="color"><b>{{ t('about.serv') }}</b>{{ t('about.serv-n') }}</p>
      </div>
      <div class="text__mission">
        <h2>{{ t('about.mission') }}</h2>
        <p>{{ t('about.mission-n') }}</p>
      </div>
      <div class="text__contact">
        <h2>{{ t('about.cont') }}</h2>
        <p>{{ t('about.cont-n') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    width: 99.9%;
    background-image: url('../assets/about-bg.png'),  linear-gradient(to right, rgba(55, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid black;
    background-blend-mode: multiply;
  }
  .row{
    max-width: 1240px;
    margin: 0 auto;
    color: #f5f8fb;
  }
  
  a{
    text-decoration: none;
    color: #b6b3b3;
  }
  
  p{
    font-size: 20px;
  }

  h1{
    margin-top: 65px;
  }

  .text__about .large{
    margin-top: 50px;
    font-size: 28px;
  }

  b{
    color: #f5f8fb;
  }

  .color{
    color: #b6b3b3;
  }

  .text__mission{
    padding-top: 45px;

  }
</style>
