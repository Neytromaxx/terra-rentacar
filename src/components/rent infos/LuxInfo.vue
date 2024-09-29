<template>
  <div class="info">
    <div class="info_lux">
        <h1>{{ t('lux.car') }}</h1>
        <p>{{ t('lux.info') }}</p>
        <h2>{{ t('lux.ques') }}</h2>
        <p>{{ t('lux.answer') }}</p>
    </div>
    <!-- <div class="bg_img">
        <img src="../../assets/leftBanner.png" alt="">
        <img src="../../assets/rightBanner.png" alt="">
    </div> -->
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
    .info{
        height: 700px;
        border: 1px solid #272933;
        /* border: 1px solid green; */
        background-color: #272933;
        background-image: url('../../assets/leftBanner.png'), url('../../assets/rightBanner.png');
        background-position: right, left;
        background-repeat: no-repeat, no-repeat;
        background-size: 10% 600px, 10% 600px;
    }

    .info_lux{
        width: 1240px;
        margin: 0 auto;
        padding-top: 70px;
        text-align: left;
        
    }

    .info_lux h1{
        font-size: 42px;
    }

    .info_lux p{
        font-size: 17px;
        line-height: 30px;
    }
</style>