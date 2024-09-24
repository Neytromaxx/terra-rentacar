<script setup>
import {useStore} from 'vuex'

const store = useStore()
const open = (()=>{
  store.commit('setSidebar')
  console.log('open')
})

</script>

<template>
    <nav>
        <div class="container">
            <div class="nav_left">
                <div class="nav__flags">
                    <img src="../assets/eng.png" alt="" @click="$i18n.locale = 'en'">
                    <img src="../assets/ru.png" alt="" @click="$i18n.locale = 'ru'">
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
                <button class="sidebar hideOnDesk" @click="open">☰</button>
                <ul>
                    <li class="hideOnMobile">
                        <RouterLink to="/cars">{{$t('Navbar.Car')}}</RouterLink>
                    </li>
                    <li class="hideOnMobile">
                        <RouterLink to="/brand">{{$t('Navbar.Brand')}}</RouterLink>
                    </li>
                    <li class="hideOnMobile">
                        <RouterLink to="/service">{{$t('Navbar.Sercive')}}</RouterLink>
                    </li>
                    <li class="hideOnMobile">
                        <RouterLink to="/about">{{$t('Navbar.About')}}</RouterLink>
                    </li>
                    <li class="hideOnMobile">
                        <RouterLink to="/contact">{{$t('Navbar.Contact')}}</RouterLink>
                    </li>
                    <li class="hideOnMobile">
                        <RouterLink to="/blog">{{$t('Navbar.Blog')}}</RouterLink>
                    </li>
                </ul>
            </div>
            <!-- <p>+998 (99) 000 04 41</p> -->
        </div>  
    </nav>
    
</template>

<style scoped>
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

    .sidebar{
      background-color: #fff;
      outline: none;
      border: none;
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
    @media (min-width: 995px) {
        .hideOnDesk{
      display: none;
    }
    }
    @media (max-width: 995px) {
        .hideOnMobile{
            display: none;
        }

        .menu-toggle{
            display: block;
        }

        .nav__flags{
            width: 25px;
            display: flex;
        }

        .nav__flags img{
            max-width: 25px;
            display: flex;
        }

         .search-input{
            width: 350px;
            margin-left: 10px;
        }

        /*.search-input input{
            display: none;
        } */

        ul.active{
            display: flex;
        }
    }
    @media (max-width: 605px) {
        .menu-toggle{
            display: block;
        }

        .nav__flags{
            width: 25px;
            display: flex;
        }

        .nav__flags img{
            max-width: 100%;
        }

        .search-input{
            width: 50px;
        }

        .search-input input{
            display: none;
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