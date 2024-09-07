<template>
  <div class="container">
    <div class="row">
      <p>
        <router-link to="/">Luxury Cars for Rent in Dubai / aboutUs</router-link>
      </p>
      <div class="text__about">
        <h1>ABOUT US</h1>
        <p class="large">Welcome to Auto Zoom Car Rental Co LLC - Your Partner in Unforgettable Journeys in Dubai!</p>
        <p class="color">In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.</p> 
      </div>  
      <div class="text__why">
        <h1>Why Auto Zoom?</h1>
        <p class="color"><b>Elegant Car Fleet:</b>We provide you the opportunity to choose from our luxurious car fleet - from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.</p>
        <p class="color"><b>Transparency and Trust:</b>We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear.</p>
        <p class="color"><b>Service at Your Level:</b>Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.</p>
      </div>
      <div class="text__mission">
        <h2>Our mission:</h2>
        <p>Auto Zoom Car Rental Co LLC is created with one goal - to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.</p>
      </div>
      <div class="text__contact">
        <h2>Contact us</h2>
        <p>Trust the professionals - trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    width: 99.9%;
    background-image: url('../assets/about-bg.png'),  linear-gradient(to right, rgba(55, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
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
  
  p{
    font-size: 20px;
  }

  h1{
    margin-top: 65px;
  }

  .text__about .large{
    margin-top: 50px;
    font-size: 28px;
  }

  b{
    color: #f5f8fb;
  }

  .color{
    color: #b6b3b3;
  }

  .text__mission{
    padding-top: 45px;

  }
</style>
