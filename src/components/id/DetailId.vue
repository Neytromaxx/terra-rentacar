<template>
  <div class="container">
    <div class="row">
      <div class="detail" v-for="item in details" :key="item.id">
        <h1>{{ item.model.name }} ({{ item.color }})</h1>
        <div class="images" v-for="img in imgs" :key="img">
          <img :src="'https://realauto.limsa.uz/api/uploads/images/'+ img.image.src" alt="">
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const cars = ref([]);
const details = ref([]);
const imgs = ref([]);
const route = useRoute();
const id = route.params.id;

const fetchDetail = async() =>{
  try{
    const response = await fetch(`https://realauto.limsa.uz/api/cars`)
    cars.value = await response.json();
    details.value = cars.value.data.filter(car => car.id === id)
    imgs.value = details.value[0].car_images
    console.log(details.value)
    console.log(imgs.value)
  }catch(error){
    console.error(error)
  }
}

onMounted(() => {
  // Fetch details based on the id
  console.log(`Fetching details for ID: `, id);
  fetchDetail()
});
</script>