<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="container">
        <div class="above">
        <div class="terra">
            <div class="img">
                <img src="../assets/logoTerra5.png" alt="">
            </div>
            <h2>{{t('Footer.Rent')}}</h2>
            <p>{{ t('Footer.rent-info')}}</p>
        </div>
        <div class="cars">
            <h3>
                <router-link to="/cars">{{ t('Footer.Car-cars')}}</router-link>
            </h3>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-Budget')}}</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-sport')}}</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-hyper')}}</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-lux')}}</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-suv')}}</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">{{ t('Footer.Car-cabriolet')}}</RouterLink>
            </p>
        </div>
        <div class="blog">
            <h3>
                <RouterLink to="/blog">{{t('Footer.Blog')}}</RouterLink>
            </h3>
        
            <h3 style="margin-top: 35px;">
                <RouterLink to="/service" >{{t('Footer.Service')}}</RouterLink>
            </h3>
            <h3 style="margin-top: 35px;">
                <RouterLink to="/contact" >{{t('Footer.Contact')}}</RouterLink>
            </h3>
            <p>{{t('Footer.contact-location')}}</p>
            <p>{{t('Footer.contact-num')}}</p>
            <p>{{t('Footer.contact-hour')}}: 24/7</p>
        </div>
        <div class="about">
            <h3>
                <RouterLink to="/about">{{t('Footer.About')}}</RouterLink>
            </h3>
            <p><RouterLink to="/">{{t('Footer.team')}}</RouterLink></p>
            <p><RouterLink to="/faq">FAQ</RouterLink></p>
            <div class="follow">
                <p>{{t('Footer.follow')}}</p>
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
        </div>
        <hr>
        <div class="last">
            <button onclick="window.location.href='tel:+998 99 0000441'">
                {{t('Footer.last-call')}}
            </button>
            <p>© {{t('Footer.last-copyright')}}</p>
            <p>
                <RouterLink to="/conditions">{{t('Footer.last-terms')}}</RouterLink> 
            </p>
            
        </div>
    </div>
  </footer>
</template>

<style scoped>
    footer{
        width: 100%;
        height: 100%;
        background-color: #111219;
        background-image: url('../assets/McLaren.png');
        background-size: 800px;
        background-repeat: no-repeat;
        background-position: 100% 110%;
        /* background-blend-mode: color-dodge; */
    }

    .container{
        max-width: 1440px;
        margin: 0 auto;
    }

    .above{
        display: flex;
        justify-content: space-between;
        padding-top: 70px;
    }

    a{
        text-decoration: none;
        color: #cdcdce;
        line-height: 25px !important;
    }

    a:hover{
        text-decoration: none;
        color: #aa0707;
    }

    p, p a{
        color: #99999c;
        
    }
    
    p a:hover{
        color: #e8e8e9;
    }

    .terra{
        width: 360px;
        
    }

    .img{
        width: 120px;
    }
    
    img{
        width: 100%;
    }

    .terra h2{
        width: 210px;
        color: #fff;
    }

    .terra p{
        width: 210px;
        margin-top: 35px;
    }

    .cars{
        width: 280px;
        color: #fff;
    }

    .blog{
        width: 440px;
        color: #fff;
    }

    .blog p{
        width: 360px;
    }

    .about{
        width: 360px;
        color: #fff;
    }

    .follow{
        margin-top: 50px;
        font-size: 18px;
        
    }

    .follow p{
        color: #fff;
    }

    .last{
        display: flex;
        justify-content: space-between;
        padding-bottom: 90px;
    }

    .last button{
        width: 150px;
        height: 60px;
        border: 1px solid #fff;
        border-radius: 1rem;
        background-color: transparent;
        color: #fff;
    }

    .last button:hover{
        background-color: #aa0707;
        border: #aa0707;
    }

    @media (max-width: 780px) {
        footer{
            width: 100%;
            height: 100%;
            background-color: #111219;
            background-image: url('../assets/McLaren.png');
            background-size: 700px;
            background-repeat: no-repeat;
            background-position: 100% 100%;
            /* background-blend-mode: color-dodge; */
        }
    .above {
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        text-align: center;
    }

    .img{
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;    
    }

    .terra, .cars, .blog, .about {
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }

    .terra h2, .terra p, .blog p {
        width: 100%;
    }

    .last {
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 15px;
    }

    /*.last button {
        width: 100%;
        margin-top: 20px;
    } */
}
</style>