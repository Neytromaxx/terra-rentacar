<template>
  <div class="container">
    <div class="row">
        <p>
            <router-link to="/">Luxury Cars for Rent in Dubai / Services</router-link>
        </p>
        <h1>SERVICES</h1>
        <div class="imgs">
            <div class="img_buggy">
                <img src="../assets/service-1.jpg" alt="">
                <h2>Ride a buggy in Dubai and have fun</h2>
                <p>Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now</p>
                <h3>
                    <router-link to="/uslugbuggies">Learn more
                        <img src="../assets/arrow-left.svg" alt="">
                    </router-link>
                </h3>
            </div>
            <div class="img_rolls">
                <img src="../assets/service-2.jpg" alt="">
                <h2>Photoshoot with luxury car rental Dubai</h2>
                <p>Professional car photoshoot as an additional type of service at Terra Car Rental</p>
                <h3>
                    <router-link to="/uslugcars">Learn more
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

</script>

<style scoped>
    .container{
        /* background-color: #1e1f27; */
        background-color: transparent;
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