<template>
  <div class="row">
    <swiper
      :slides-per-view="3"
      loop
      :navigation="true"
      pagination
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image" />
      </swiper-slide>
    </swiper>

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
// // import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

// SwiperCore.use([Navigation, Pagination]);

const images = [
  new URL('@/assets/main-lambo.png', import.meta.url).href,
  new URL('@/assets/main-mers.png', import.meta.url).href,
  new URL('@/assets/main-rolls.png', import.meta.url).href,
  new URL('@/assets/main-audi.png', import.meta.url).href
  // require('@/assets/main-mers.png'),
  // require('@/assets/main-rolls.png'),
  // require('@/assets/main-audi.png')
];
</script> 

<!-- <script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script> -->

<style scoped>
  .row{
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>