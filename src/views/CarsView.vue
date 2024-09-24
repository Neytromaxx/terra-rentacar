<template>
  <div class="car-container">
    <div class="car-container__filter">
      <img src="../assets/TerraAvto.png" alt="">
      <p>Filter by</p>
      <p>Offers</p>
      <hr>
      <div class="car-type">
        <p>Car type</p>
        <br>
        <div class="check" v-for="item in uniqueType" :key="item">
          <p>
            <input type="checkbox" :value="item" v-model="selectedType" name="">
            {{ item }}
          </p>          
        </div>
        <hr>
        <div class="check" v-for="item in uniqueBrand" :key="item">
          <p>
            <input type="checkbox" :value="item" v-model="optionItems">
            {{ item }}
          </p> 
        </div>
        <p>Model</p>
        <select v-model="selectedModel">
          <option value="">Choose a model</option>
          <option :value="option" v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>
      <div class="filter-btn">
        <button @click="reset" class="reset">Reset</button>
        <!-- <button @click="applyFilter" class="apply">Apply filter</button> -->
      </div>
    </div>
    <br>
    <div class="car-container__cars flexbox" >
      <div class="card" v-for="item in filteredCars" :key="item.id" @click="goToDetails(item.id)">
        <img :src="'https://realauto.limsa.uz/api/uploads/images/'+ item.car_images[0].image.src" alt="" />
        <p class="card_title">{{ item?.brand?.title }} {{ item?.model?.name }}</p>
        <p class="card_price"><b>AED {{ item?.price_in_aed }}</b> / $ {{ item?.price_in_usd }}</p>
        <p style="color: #929191;">per day</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const cars = ref([]);
const uniqueType = ref([]);
const uniqueBrand = ref([]);
const selectedType = ref([]);
const optionItems = ref([]);
const options = ref([]);
const selectedModel = ref('');

const fetchCars = async () => {
  try {
    const response = await fetch('https://realauto.limsa.uz/api/cars');
    cars.value = await response.json();

    // Takrorlanmas mashina turlarini olish
    const uniqueTypeSet = new Set(cars.value.data.map(item => item.category.name_en));
    uniqueType.value = [...uniqueTypeSet];

    // Takrorlanmas brendlarni olish
    const uniqueBrandSet = new Set(cars.value.data.map(item => item.brand.title));
    uniqueBrand.value = [...uniqueBrandSet];
    
    // Mashina modellari
    options.value = [...new Set(cars.value.data.map(item => item?.model?.name))];
    
  } catch (error) {
    console.error(error);
  }
};

const filteredCars = computed(() => {
  return cars?.value?.data?.filter(car => {
    const typeMatch = selectedType.value.length === 0 || selectedType.value.includes(car.category.name_en);
    const brandMatch = optionItems.value.length === 0 || optionItems.value.includes(car.brand.title);
    const modelMatch = selectedModel.value === '' || car.model.name === selectedModel.value;
    return typeMatch && brandMatch && modelMatch;
  });
});

// const applyFilter = () => {
//   console.log('Tanlangan mashina turlari: ', selectedType.value);
//   console.log('Tanlangan brendlar: ', optionItems.value);
//   console.log('Tanlangan model: ', selectedModel.value);
// };

const reset = () => {
  selectedType.value = [];
  optionItems.value = [];
  selectedModel.value = '';
  console.log('Filtrlar reset qilindi');
};

const router = useRouter();
const goToDetails = (id)=>{
  router.push({ name: 'DetailsPage', params: { id } });
}

onMounted(fetchCars);
</script>

<!-- <template>
  <div class="car-container">
    <div class="car-container__filter">
      <img src="../assets/TerraAvto.png" alt="">
      <p @click="add">Filter by</p>
      <p>Offers</p>
      <hr>
      <div class="car-type">
        <p>Car type</p>
        <br>
        <div class="check" v-for="item in uniqueType" :key="item">
          <p>
            <input type="checkbox" :value="item" v-model="selectedType" name="" id="">
            {{ item }}
          </p>          
        </div>
        <hr>
        <div class="check" v-for="item in uniqueBrand" :key="item">
          <p>
            <input @click="take" type="checkbox" :value="item" v-model="optionItems">
            {{ item }}
          </p> 
          
        </div>
        <p>Model</p>
          <select name="" id="">
            <option value="">Choose a model</option>
            <option :value="option" v-for="option in options" :key="option">{{ option }}</option>
          </select>
      </div>
      <div class="filter-btn">
        <button type="reset" class="reset">Reset</button>
        <button type="apply" class="apply">Apply filter</button>
      </div>
    </div>
    
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
const uniqueType = ref([]);
const uniqueBrand = ref([]);
const selectedType = ref([]);
const optionItems = ref([]);
const options = ref([]);
console.log(optionItems.value)


const fetchCars = async() =>{
  try{
    const response = await fetch('https://realauto.limsa.uz/api/cars');
    cars.value = await response.json();

    const uniqueTypeSet = new Set(cars.value.data.map(item => item.category.name_en));
    uniqueType.value = [...uniqueTypeSet];

    const uniqueBrandSet = new Set(cars.value.data.map(item => item.brand.title));
    uniqueBrand.value = [...uniqueBrandSet];
    
    options.value = cars.value.data.map(item => item?.model?.name )

    console.log(cars.value.data)
  }catch(error){
    console.error(error)
  }
}

const take = () =>{
console.log('Yangilangan check: ',optionItems.value)

}

const reset = ()=>{

}


const arr = [1,2,3,4]

const add = () =>{
  arr.values
  console.log(arr.values)
}
onMounted(fetchCars)
</script> -->

<style scoped>
.car-container{
    display: flex;
    justify-content: space-between;
    padding: 15px 0px 50px 0px;
    background-color: #1e1f27;
  }

  .car-container__filter{
    width: 350px;
    height: 100%;
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

  select{
    width: 280px;
    font-size: 18px;
    padding: 5px;
  }

  .filter-btn{
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
  }

  .filter-btn .reset{
    width: 100px;
    line-height: 65px;
    font-size: 1.35rem;
    background-color: transparent;
    color: #ffe;
    border: 1px solid #ffe;
    border-radius: .7rem;
  }

  .filter-btn .apply{
    width: 140px;
    line-height: 65px;
    font-size: 1.35rem;
    background-color: #37b367;
    color: #ffe;
    border: 1px solid #37b367;
    border-radius: .7rem;
  }
</style>