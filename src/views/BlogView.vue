<template>
  <div class="container">
    <div class="row">
        <p>
          <router-link to="/">Luxury Cars for Rent in Dubai / blog</router-link>
        </p>
      <h1 style="padding-left: 20px; padding-top: 30px;">Blog</h1>
      <div class="info">
        <div class="item" v-for="(item, index) in items" :key="index">
        <div class="left">
          <img :src="item.img" alt="Image" class="image" />
        </div>
        <div class="right">
          <div class="content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          </div>
          <div class="meta">
            <span class="date">{{ item.date }}</span>
            <router-link :to="item.link" class="link"><img src="../assets/sircle.svg" alt=""></router-link>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script setup>
    const items = [
      {
        img: new URL('@/assets/blog-1.jpg', import.meta.url).href,
        title: 'Top 3 Destinations to Visit in Dubai in a Rental Car',
        description: 'One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.',
        date: '12/09/2024',
        link: '#'
      },
      {
        img: new URL('@/assets/blog-2.jpg', import.meta.url).href,
        title: 'Top 5 wonderful spots for a car photo session in Dubai',
        description: 'There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?',
        date: '15/10/2024',
        link: '#'
      },
      {
        img: new URL('@/assets/blog-3.jpg', import.meta.url).href,
        title: 'Top 5 Reasons to Rent a Car Dubai Style this Summer',
        description: 'Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We`re your one-stop four-wheel solution to making the most of your time in Dubai.',
        date: '20/11/2024',
        link: '#'
      }
    ];
</script>

<style scoped>
  .container{
    width: 99.9%;
    background-color: #1e1f27;
    border: 1px solid #1e1f27;
  }

  p a{
    text-decoration: none;
    color: #a3a2a2;
    padding: 20px;
  }

  .row{
    max-width: 1240px;
    margin: 0 auto;
    
    color: #efeff1;
  }

  .info{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #272933;
  }

  .item{
    width: 1240px;
    display: flex;
    padding: 20px;
  }

  .left{
    width: 250px;
  }

  .image {
  width: 100%;
  height: 270px;
}

  .right {
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }

  .content h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .content p {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link{
    transition: transform 1s ease;
  }

  .link:hover {
    transform: translateX(20px);
  }
</style>