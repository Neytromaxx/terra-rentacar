<template>
  <article>
    <div class="row">
      <h2>{{ t('car.budget') }}</h2>
      <div class="flexbox">
        <BudgetCars v-for="item in slicebudget" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>

      <h2>{{ t('car.sport') }}</h2>
      <div class="flexbox">
        <SportCars v-for="item in slicesport" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>

      <h2>{{ t('car.hyper') }}</h2>
      <div class="flexbox">
        <HyperCars v-for="item in slicehyper" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>
      
      <h2>{{ t('car.lux') }}</h2>
      <div class="flexbox">
        <LuxCars v-for="item in slicelux" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>
      
      <h2>{{ t('car.suv') }}</h2>
      <div class="flexbox">
        <SuvCars v-for="item in slicesuv" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>

      <h2>{{ t('car.cab') }}</h2>
      <div class="flexbox">
        <CabCars v-for="item in slicecab" :key="item.id" :cars="item" @click="goToDetails(item.id)"/>
      </div>
    </div>
  </article>
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import BudgetCars from './BudgetCars.vue'
import SportCars from './SportCars.vue'
import HyperCars from './HyperCars.vue'
import LuxCars from './LuxCars.vue'
import SuvCars from './SuvCars.vue';
import CabCars from './CabCars.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const allCars = ref([])
const budgetCars = ref([])
const sportCars = ref([])
const hyperCars = ref([])
const luxCars = ref([])
const suvCars = ref([])
const cabCars = ref([])

const slicebudget = ref([]);
const slicesport = ref([]);
const slicehyper = ref([]);
const slicelux = ref([]);
const slicesuv = ref([]);
const slicecab = ref([]);

const fetchCars = async () => {
  try {
    const reponse = await fetch('https://realauto.limsa.uz/api/cars')
    allCars.value = await reponse.json()

    budgetCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Budget cars Rental Emirates')
    slicebudget.value = budgetCars.value.slice(0, 3)

    sportCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Sports cars Rental Emirates')
    slicesport.value = sportCars?.value.slice(0,3)
    
    hyperCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Hyper Cars Rental Emirates')
    slicehyper.value = hyperCars?.value.slice(0,3)
    
    luxCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Luxury Cars Rental Emirates')
    slicelux.value = luxCars?.value.slice(0,3)
    
    suvCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Suv Cars Renal Emirates')
    slicesuv.value = suvCars?.value.slice(0,3)
    
    cabCars.value = allCars?.value?.data?.filter(car => car?.category?.name_en === 'Cabriolet cars rental Emirates')
    slicecab.value = cabCars?.value.slice(0,3)
  } catch (error) {
    console.error('Error fetching car data:', error)
  }
}

const router = useRouter();
const goToDetails = (id)=>{
  router.push({ name: 'DetailsPage', params: { id } });
}

onMounted(fetchCars)
</script>

<style scoped>
article{
  margin: 70px 0px;
}
.flexbox{
  display: flex;
  flex-wrap: wrap;
  gap: 150px;
}
h2 {
  color: #fff;
}
</style>
