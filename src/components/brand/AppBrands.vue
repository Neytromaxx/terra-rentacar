<template>
    <article>
        <div class="brand-row">
            <div class="card">
                <div class="img">
                    <img :src="'https://realauto.limsa.uz/api/uploads/images/'+image" alt="">
                </div>
                <p><b>{{ title }}</b></p>
            </div>
        </div>
    </article>
</template>

<script setup>
import { computed, defineProps} from 'vue';
const props = defineProps({
  brand:{
    type: Object,
    required: true
  }
})

const title = computed(()=> props.brand?.title || 'Nomalum brend')
const image = computed(()=> props.brand?.image_src)

</script>

<style scoped>
article{
    text-align: center;
    display: flex;
    justify-content: space-between;
}
.card{
    width: 140px;
    height: 200px;
    margin: 0px 9px 20px 9px;
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

/* @media (max-width: 768px) {
  .brand-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .brand-row {
    grid-template-columns: 1fr;
  }
} */
</style>