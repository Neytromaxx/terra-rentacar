<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu (){
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <nav>
        <div class="container">
            <div class="nav_left">
                <div class="nav__flags">
                    <img src="../assets/eng.png" alt="">
                    <img src="../assets/ru.png" alt="">
                </div>
                <form  method="get" class="search-input">
                    <img src="../assets/magnifying-glass.svg" alt="">
                    <input type="search" name="" id="" placeholder="Search...">
                </form>
                <div class="nav__logo">
                    <RouterLink to="/">
                        <img src="../assets/logoTerra5.png" alt="">
                    </RouterLink>
                </div>
            </div>
            <div class="nav_right">
                <button class="menu-toggle" @click="toggleMenu">☰</button>
                <ul class="nav_items" :class="{ 'active': isMenuOpen }">
                    <li>
                        <RouterLink to="/cars">Cars</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/brand">Brand</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/service">Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About us</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contacts</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog">Blog</RouterLink>
                    </li>
                </ul>
            </div>
            <!-- <p>+998 (99) 000 04 41</p> -->
        </div>  
    </nav>
    
</template>

<style scoped>
    /* *{
        padding: 0;
        margin: 0;
    } */
    nav{
        width: 100%;
        height: 100%;
        background-color: #111219;
    }

    .container{
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        justify-content: space-between;
    }

    .nav_left{
        display: flex;
        align-items: center;
        max-width: 770px;
    }

    .container .nav_left .nav__flags img{
        width: 40px !important;
        margin: 0px 10px 0px 0px !important;
    }

    .search-input{
        width: 380px;
    }
    .search-input img{
        position: relative !important;
        top: 5px !important;
        left: 40px !important;
    }

    .search-input input{
        max-width: 100%;
        height: 55px;
        margin: 0px 0px 0px 10px;
        padding: 15px 0px 15px 30px;
        font-size: 18px;
        color: #cdcdce;
        outline: none;
        border: none;
        border-radius: .7rem;
        background: linear-gradient(to right, #4a4b4e, #12131a);
    }

    .nav__logo img{
        width: 130px;
        margin: 0px 0px 0px 20px;
    }

    .nav_right{
        max-width: 770px;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: #cdcdce;
        cursor: pointer;
    }

    .nav_right ul{
        list-style: none;
        padding: 0;
        display: flex;
        margin-top: 20px;
        text-align: center;
    }

    .nav_right li {
        margin-left: 45px;
        position: relative;
    }

    .nav_right a{
        color: #cdcdce;
        text-decoration: none;
        font-size: 20px;
        
    }

    .nav_right a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: #cdcdce;
        transition: width 0.4s ease, left 0.4s ease;
    }

    .nav_right a:hover::after{
        width: 100%;
        left: 0;
    }

    p{
        color: #cdcdce;
    }

    @media (max-width: 1265px) {
        nav{
            max-width: 100%;
        }
        
        .container{
            flex-wrap: wrap;
        }

        .nav_left{
            justify-content: space-between;
        }

        .search-input{
            width: 360px;
        }

        .nav_left input{
            margin-left: 10px;
        }

        .nav__logo{
            width: 110px;
            margin: 0 auto;
        }

        .nav_right{
            justify-content: flex-start;
            margin-top: 10px;
        }

        .nav_right ul {
            margin: 0;
        }

        .nav_right ul li{
            margin-left: 5px;
            position: relative;
        }
    }

    @media (max-width: 1170px) {
        .nav__flags img{
            width: 30px;
        }

        .search-input{
            width: 340px;
        }

        .nav__logo{
            width: 100px;
        }

        .nav_right ul li{
            margin-left: 0px;
            position: relative;
        }
        
        .nav_right ul li a{
            margin-left: 15px;
        }
    }

    @media (max-width: 995px) {
        .menu-toggle{
            display: block;
        }

        .nav_items{
            display: none;
            flex-direction: column;
            width: 50%;
        }

        ul.active{
            display: flex;
        }
    }

    @media (max-width: 420px) {
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .nav__flags img{
            width: 20px;
        }

        .search-input input{
            display: none;
        }

        .search-input img{
            color: #cdcdce;
        }
    }
</style>