<template>
  <div class="container">
    <div class="row">
        <p>
            <router-link to="/">Luxury Cars for Rent in Dubai / Services</router-link>
        </p>
        <h1>{{ t('service.service') }}</h1>
        <div class="imgs">
            <div class="img_buggy">
                <img src="../assets/service-1.jpg" alt="">
                <h2>{{ t('service.buggy') }}</h2>
                <p>{{ t('service.buggy-info') }}</p>
                <h3>
                    <router-link to="/uslugbuggies">{{ t('service.link') }}
                        <img src="../assets/arrow-left.svg" alt="">
                    </router-link>
                </h3>
            </div>
            <div class="img_rolls">
                <img src="../assets/service-2.jpg" alt="">
                <h2>{{ t('service.lux') }}</h2>
                <p>{{ t('service.lux-info') }}</p>
                <h3>
                    <router-link to="/uslugcars">{{ t('service.link') }}
                        <img src="../assets/arrow-left.svg" alt="">
                    </router-link>
                </h3>
            </div>
        </div>
    </div>
  </div>
  <div class="cleaner"></div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
    .container{
        /* background-color: #1e1f27; */
        background-color: #1e1f27;
        border: 1px solid #1e1f27;
        padding: 70px 0px;
    }

    .row{
        max-width: 1240px;
        margin: 0 auto;
        text-align: left;
        color: #f5f8fb;
    }

    .cleaner{
        clear: both;
    }

    a{
        text-decoration: none;
        color: #f5f8fb;
    }

    h2, p{
        width: 280px;
    }

    h3 a{
        margin-left: 30px;
        display: inline-block;
        transition: transform .7s ease;
    }
    
    h3 a:hover{
        transform: translateX(20px);
        
    }

    h3 img{
        position: relative;
        top: 10px;
    }

    .imgs{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: flex-start;
        /* margin-bottom: 50px; */
    }

    .img_buggy{
        width: 330px;
        margin-right: 30px;
    }

    .img_buggy img{
        max-width: 100%;
    }

    .img_rolls{
        width: 330px;
    }

    .img_rolls img{
        max-width: 100%;
    }


</style>