<template>
  <div class="container">
    <div class="row">
      <p>
        <router-link to="/">Luxury Cars for Rent in Dubai / blog</router-link>
      </p>
      <h1 style="padding-left: 20px; padding-top: 30px;">{{ t('blog.blog') }}</h1>
      <div class="info">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="left">
            <img :src="item.img" alt="Image" class="image" />
          </div>
          <div class="right">
            <div class="content">
              <h1>{{ t(item.title) }}</h1>
              <p>{{ t(item.description) }}</p>
            </div>
            <div class="meta">
              <span class="date">{{ item.date }}</span>
              <router-link :to="item.link" class="link">
                <img src="../assets/sircle.svg" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const items = [
  {
    img: new URL('@/assets/blog-1.jpg', import.meta.url).href,
    title: 'blog.title1',
    description: 'blog.description1',
    date: '12/09/2024',
    link: '#'
  },
  {
    img: new URL('@/assets/blog-2.jpg', import.meta.url).href,
    title: 'blog.title2',
    description: 'blog.description2',
    date: '15/10/2024',
    link: '#'
  },
  {
    img: new URL('@/assets/blog-3.jpg', import.meta.url).href,
    title: 'blog.title3',
    description: 'blog.description3',
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