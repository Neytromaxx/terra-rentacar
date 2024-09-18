<template>
  <div class="car-container">
    <div class="car-container__filter">
      <img src="../assets/TerraAvto.png" alt="">
      <p @click="add">Filter by</p>
      <p>Offers</p>
      <hr>
      <div class="car-type">
        <p>Car type</p>
        <br>
        <div class="check" v-for="item in uniqueOptions" :key="item">
          <p><input type="checkbox" name="" id="">
          {{ item }}</p>
        </div>
        
      </div>
    </div>
    <!-- <p>Luxury Cars for Rent in Dubai / Hire the latest supercar</p> -->
    <br>
    <div class="car-container__cars flexbox">
      <div class="card" v-for="item in cars?.data" :key="item.id">
        <img :src="'https://realauto.limsa.uz/api/uploads/images/'+ item.car_images[0].image.src" alt="" />
        <p class="card_title">{{ item?.brand?.title }} {{ item?.model?.name }}</p>
        <p class="card_price"><b>AED {{ item?.price_in_aed }}</b> / $ {{ item?.price_in_usd }}</p>
        <p style="color: #929191;">per day</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted } from 'vue';
const cars = ref([]);
const uniqueOptions = ref([]);
const fetchCars = async() =>{
  try{
    const response = await fetch('https://realauto.limsa.uz/api/cars');
    cars.value = await response.json();
    const uniqueSet = new Set(cars.value.data.map(item => item.category.name_en));
    uniqueOptions.value = [...uniqueSet];
    console.log(cars.value.data)
  }catch(error){
    console.error(error)
  }
}

const arr = [1,2,3,4]

const add = () =>{
  arr.values
  console.log(arr.values)
}
onMounted(fetchCars)
</script>

<style scoped>
.car-container{
    display: flex;
    justify-content: space-between;
    padding: 15px 0px 50px 0px;
    background-color: #1e1f27;
  }

  .car-container__filter{
    width: 350px;
    height: 100vh;
    padding: 10px 15px 0px 15px;
    background-color: #2b2b35;
    color: #fff;
  }

  .car-container__filter img{
    width: 250px;
  }

  .car-container__filter p{
    font-size: 22px;
  }

  .car-container__cars{
    width: 1240px;
  }

  .card{
    width: 290px;
    height: 400px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border: none;
    /* background: linear-gradient(rgb(148, 156, 148),rgb(148, 156, 148) 10%, rgba(255,0,0,0)); */
    background: linear-gradient(#343333 1%, #626060 , #0f0f0f);
    cursor: pointer;
  }

  .flexbox{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  }
  
  .card:hover{
    border-radius: 1rem;
    border: none;
    /* background: linear-gradient(rgb(148, 156, 148),rgb(148, 156, 148) 10%, rgba(255,0,0,0)); */
    background: linear-gradient(#636161 1%, #232323 , #0f0f0f);
    cursor: pointer;
  }

  .card img{
    width: 250px;
    align-content: center;
  }

  .card .card_title{
    padding: 0px 0px 15px 10px;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  .card .card_price b{
    color: #fff;
  }
  
  .card .card_price{
    color: #929191;
  }

  .check p{
    font-size: 18px;
  }
</style>