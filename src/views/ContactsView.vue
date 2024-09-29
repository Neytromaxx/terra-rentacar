<template>
    <div class="container">
        <div class="row">
            <p>
                <router-link to="/">Luxury Cars for Rent in Dubai / Contacts</router-link>
            </p>
            <div class="text__ques">
                <h1>{{ t('contact.ques') }}</h1>
                <p>{{ t('contact.ques-n') }}</p>
            </div>
            <div class="text__office">
                <h2>{{ t('contact.office') }}</h2>
                <p><img src="../assets/location.svg" alt="">{{ t('contact.location') }}</p>
                <p><img src="../assets/tel.svg" alt="">+998 (99) 000 04 41</p>
                <p><img src="../assets/mail.svg" alt="">terra-rentacar.mail.ru</p>
            </div>
            <hr>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1725623485649!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    >
                </iframe>
            </div>
        </div>
    </div>
  
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
    .container{
        width: 99.9%;
        background-image: url('../assets/contactcover.jpg'),  linear-gradient(to right, rgba(55, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid black;
        background-blend-mode: multiply;
    }

    .row{
        max-width: 1240px;
        margin: 0 auto;
        color: #f5f8fb;
    }

    a{
        text-decoration: none;
        color: #b6b3b3;
    }

    .text__ques{
        padding-top: 30px;
    }
    
    .text__ques p{
        padding-top: 20px;
        font-size: 20px;
        color: #b6b3b3;
    }

    .text__office{
        padding-top: 50px;
        align-content: center;
    }
    
    .text__office h2{
        padding-left: 50px;
    }

    .text__office img{
        padding-right: 35px;
    }

    .text__office p{
        font-size: 20px;
    }

    iframe{
        width: 100%;
        border-radius: 1rem;
        padding-bottom: 70px;
    }
</style>