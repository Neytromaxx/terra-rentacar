<template>
  <div class="row">
    <h2>Budget cars Rental Emirates</h2>
    <BudgetCars :cars="budgetCars" />
    
    <h2>Sports cars Rental Emirates</h2>
    <SportCars :cars="sportCars" />
    
    <h2>Hyper Cars Rental Emirates</h2>
    <HyperCars :cars="hyperCars" />
    
    <h2>Luxury Cars Rental Emirates</h2>
    <LuxCars :cars="luxCars" />
    
    <h2>Suv Cars Renal Emirates</h2>
    <SuvCars :cars="suvCars" />    
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import BudgetCars from './BudgetCars.vue';
import SportCars from './SportCars.vue';
import HyperCars from './HyperCars.vue';
import LuxCars from './LuxCars.vue';
import SuvCars from './SuvCars.vue';

const allCars = ref([]);
const budgetCars = ref([]);
const sportCars = ref([]);
const hyperCars = ref([]);
const luxCars = ref([]);
const suvCars = ref([]);

const groupedCars = ref({});

const fetchCars = async () => {
    try{
        const reponse = await fetch('https://api.autozoomrental.com/api/cars/category');
        allCars.value = await reponse.json();
        // const uniqueCategories = [...new Set(allCars.value.data.map(car => car.category_id))];
        // uniqueCategories.forEach(categoryId => {
        //     groupedCars[categoryId] = allCars.value.data.filter(car => car.category_id === categoryId);
        // });
        console.log('Barchasi:',allCars.value)
        console.log('DATA: ',allCars.value.data[0])
        // allCars.value.data.forEach(car => {
        //    budgetCars.value = car.category_id
        // });
        // budgetCars.value = allCars.value.data.filter(car => car.category_id)
        console.log(budgetCars.value)
    }catch (error) {
      console.error('Error fetching car data:', error);
    }
}
onMounted(fetchCars)
</script>

<style scoped>
    h2{
        color: #fff;
    }
</style>