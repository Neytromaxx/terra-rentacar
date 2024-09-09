<template>
  <div class="row">
    <Swiper
      :slides-per-view="3"
      loop
      :navigation="true"
      pagination
    >
      <SwiperSlide class="img" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image" />
      </SwiperSlide>
    </Swiper>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
    <!-- <swiper
    :slides-per-view="3"
    :space-between="720"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
      <swiper-slide><img src="../../assets/main-lambo.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/main-mers.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/main-rolls.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/main-audi.png" alt=""></swiper-slide>

  </swiper> -->
  </div>
  
</template>

 <script setup>
// import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';
import {SwiperSlide}  from 'swiper/vue';
import {Swiper} from 'swiper/vue';
// import {Grid} from 'swiper/vue'

import "swiper/css"
import 'swiper/css/grid'

const images = ref([
  new URL('@/assets/main-lambo.png', import.meta.url).href,
  new URL('@/assets/main-mers.png', import.meta.url).href,
  new URL('@/assets/main-rolls.png', import.meta.url).href,
  new URL('@/assets/main-audi.png', import.meta.url).href
]);

// const swiperInstance = ref(null)

// onMounted(()=>{
//   swiperInstance.value = new Swiper('.swiper',{
//     modules: [Grid],
//     grid: {
//       rows: 2,
//     },
//     slidesPerView: 3,
//     spaceBetween: 30,
//   })
// })
</script> 

<style scoped>
  .row{
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .img{
    width: 700px;
    height: 450px;
    display: flex;
    align-items: center;
  }
  img{
    max-width: 100%;
    margin: 30px 70px;
    padding: 20px 40px;
  }
</style>