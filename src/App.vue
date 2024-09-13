<script setup>
// import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import AppSidebar from './components/ui/AppSidebar.vue';
import AppLoader from './components/ui/AppLoader.vue';
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

const isLoading = ref(false);
const router = useRouter();

router.beforeEach((to, from, next)=>{
  if(to.name === 'DetailsPage' || to.name === 'brand' || to.name === 'home'){
    isLoading.value = true
  }
  next()
})

router.afterEach(()=>{
  
  setTimeout(()=>{
    isLoading.value = false
  },2000)
})

onMounted(()=>{
    setTimeout(()=>{
        isLoading.value = false
    },3000)
})
</script>

<template>
  <app-loader v-if="isLoading" ></app-loader>
  <app-sidebar></app-sidebar>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<!-- <template>
  <nav>
    <app-navbar></app-navbar>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <app-footer></app-footer>
  </footer>
</template> -->

<style scoped>
  
</style>
