<template>
    <article>
      <div class="cars">
        <div class="cars_card">
          <img :src="'https://realauto.limsa.uz/api/uploads/images/'+image" alt="" />
          <p class="card_title">{{ BrandTitle }} {{ name }}</p>
          <p class="card_price"><b>AED {{ price }}</b> / $ {{ usd_price }}</p>
          <p style="color: #929191;">per day</p>
        </div>
      </div>
    </article> 
  </template>
    
  <script setup>
  import { computed, defineProps} from 'vue';
  const props = defineProps({
    cars:{
      type: Object,
      required: true
    }
  })
  
  const BrandTitle = computed(()=> props.cars?.brand?.title || 'Nomalum brend')
  const image = computed(()=> props.cars?.car_images[0]?.image?.src)
  const price = computed(()=> props.cars?.price_in_aed)
  const usd_price = computed(()=> props.cars?.price_in_usd)
  const name = computed(()=> props.cars?.model?.name)
  </script>
    
  <style scoped>
    .cars{
      width: 330px;
    }
  
    .cars_card{
      width: 320px;
      height: 400px;
      padding: 5px;
      flex: 1 1 calc(33.333% - 20px)
    }
  
    .cars_card:hover{
      border-radius: 1rem;
      border: none;
      background: linear-gradient(#636161 1%, #232323 , #0f0f0f);
      cursor: pointer;
    }
  
    .cars_card img{
      width: 250px;
      align-items: center;
    }
  
    .cars_card .card_title{
      padding: 0px 0px 15px 10px;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  
    .cars_card .card_price b{
      color: #fff;
    }
    
    .cars_card .card_price{
      color: #929191;
    }
  </style>