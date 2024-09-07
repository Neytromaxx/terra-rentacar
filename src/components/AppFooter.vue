<script setup>

</script>

<template>
  <footer>
    <div class="container">
        <div class="above">
        <div class="terra">
            <div class="img">
                <img src="../assets/logoTerra5.png" alt="">
            </div>
            <h2>LUXURY CAR RENTAL IN EMIRATES</h2>
            <p>Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure</p>
        </div>
        <div class="cars">
            <h3>
                <router-link to="/cars">Cars</router-link>
            </h3>
            <p>
                <RouterLink to="/cars">Budget cars Rental Emirates</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">Sports cars Rental Emirates</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">Hyper cars Rental Emirates</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">Luxury cars Rental Emirates</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">SUV cars Rental Emirates</RouterLink>
            </p>
            <p>
                <RouterLink to="/cars">Cabriolet cars Rental Emirates</RouterLink>
            </p>
        </div>
        <div class="blog">
            <h3>
                <RouterLink to="/blog">Blog</RouterLink>
            </h3>
        
            <h3 style="margin-top: 35px;">
                <RouterLink to="/service" >Services</RouterLink>
            </h3>
            <h3 style="margin-top: 35px;">
                <RouterLink to="/contact" >Contacts</RouterLink>
            </h3>
            <p>Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</p>
            <p>+998 99 0000441</p>
            <p>Working hours: 24/7</p>
        </div>
        <div class="about">
            <h3>
                <RouterLink to="/about">About us</RouterLink>
            </h3>
            <p><RouterLink to="/">Our team</RouterLink></p>
            <p><RouterLink to="/faq">FAQ</RouterLink></p>
            <div class="follow">
                <p>Follow us</p>
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
        </div>
        <hr>
        <div class="last">
            <button onclick="window.location.href='tel:+998 99 0000441'">
                Call Us
            </button>
            <p>© 2024 Terra Car Rental. United Arab Emirates.</p>
            <p>
                <RouterLink to="/conditions">Terms and Conditions</RouterLink> 
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