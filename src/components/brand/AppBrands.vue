<template>
    <article>
        <h1>Brands</h1>
        <div class="row">
            <div class="card" v-for="item in brands?.data" :key="item.id">
                <div class="img">
                    <img :src="'https://realauto.limsa.uz/api/uploads/images/'+item?.image_src" alt="">
                </div>
                <p><b>{{ item?.title }}</b></p>
            </div>
        </div>
    </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const brands = ref([])

    const fetchBrands = async()=>{
        try{
            const res = await fetch('https://realauto.limsa.uz/api/brands')
            brands.value = await res.json()
            // console.log(brands.value)
            // console.log(brands.value.data)
        }catch(error){
            console.error(error)
        }
    }

    onMounted(fetchBrands)
</script>

<style scoped>
article{
    width: 1440px;
}
.row{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));    
    gap: 20px;
    text-align: center;
}

h1{
    color: #fff;
    font-size: 32px;
    padding-left: 20px;
}

.card{
    width: 140px;
    height: 200px;
    margin: 0px 20px 20px 20px;
    align-content: center;
    border: 1px solid #2e2f32;
    background-color: #14151d;
    overflow: hidden;
}

img{
    width: 40px;
    height: 40px;
}
p{
    color: #a3a3a3;
    font-size: 18px;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>