<template>
    <div class="info">
        <div class="info_left">
            <iframe 
                width="940" 
                height="455" 
                src="https://www.youtube.com/embed/rsHmvxJ86PA?si=o45vNz4yh_udjBnl" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                >
            </iframe>
        </div>
        <div class="info_right">
            <h1>{{ t('sport.car') }}</h1>
            <p>{{ t('sport.info') }}</p>
            <p class="info_link">
                <router-link to="/cars"> ALL CARS</router-link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path fill="#fbf9f9" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
                </svg>
            </p>
        </div>        
    </div>
</template>
  
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
    .info{
        height: 520px;
        display: flex;
        flex-wrap: wrap;
        padding-top: 50px;
        border: 1px solid #181921;
        /* border: 1px solid red; */
        background-color: #181921;
        background-image: url('../../assets/halifa.png');
        background-position: 95% 50%;
        background-repeat: no-repeat;
        background-size: 400px;
        background-blend-mode: hard-light;
        /* justify-content: space-between; */
    }

    .info_left{
        width: 950px;
    }

    .info_right{
        width: 420px;
        padding-left: 15px;
        text-align: left;
    }

    .info_right h1{
        font-size: 40px;
    }

    .info_right p{
        font-size: 18px;
        line-height: 28px;
    }

    .info_link{
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all .2s ease;
        cursor: pointer;}

    .info_link:hover a{
        color: red;
    }

    .info_link:hover svg path{
        fill: red;
    }
  
    .info_link:hover svg{
        transform: translateX(10px);
        transition: transform .7s ease;
    }

    .info_link a{
        color: #fff;
        text-decoration: none;
    }

    .info_link svg{
        width: 30px;
    }
</style>