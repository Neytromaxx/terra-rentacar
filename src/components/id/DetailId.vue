<template>
  <div class="container">
    <div class="row">
      <div class="detail" v-for="item in details" :key="item.id">
        <div class="detail-left">
          <h1>{{ item.model.name }} ({{ item.color }})</h1>
          <div class="images" v-for="img in imgs" :key="img">
            <img :src="'https://realauto.limsa.uz/api/uploads/images/'+ img.image.src" alt="">
          </div>
        </div>
        <div class="detail-right">
          <table class="detail-right__price">
            <tbody>
          <tr>
            <td>AED {{ item.price_in_aed }}/ ${{ item.price_in_usd }}</td>
            <td class="small-size">deposit</td>
            <td>AED {{ item.deposit }}</td>
          </tr>
          <tr>
            <td class="small-size">Cell 4</td>
            <td></td>
            <td class="small-size">AED 5000 for credit cards payment</td>
          </tr>
          <tr>
            <td>AED {{ item.price_in_aed }}/ ${{ item.price_in_usd }}</td>
            <td class="small-size">Premium protection</td>
            <td>AED {{ item.premium_protection }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="small-size">AED 5000 for price for 1 day</td>
          </tr>
        </tbody>
        </table> 
        <table class="detail-right__info">
          <tbody>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path fill="#e6e6e6" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/>
              </svg>
              <p>{{ item.year }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path fill="#e6e6e6" d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L176 0zM288 204c28.7 0 52 23.3 52 52l0 96c0 28.7-23.3 52-52 52s-52-23.3-52-52l0-96c0-28.7 23.3-52 52-52zm-12 52l0 96c0 6.6 5.4 12 12 12s12-5.4 12-12l0-96c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5l0 2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9l43.8 0c11 0 20 9 20 20s-9 20-20 20l-64 0c-11 0-20-9-20-20l0-15.7c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8l0-2.2c0-6.9-5.6-12.5-12.5-12.5z"/>
              </svg>
              <p>{{ item.seconds }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
              <p>{{ item.max_speed }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="30" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9L38.8 5.1zM545.5 512L528 512 284.3 320l-59 0C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0 .3 0z"/></svg>
              <p>{{ item.max_people }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
              <p>{{ item.color }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <svg fill="#eee" height="28px" width="28px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 452.263 452.263" xml:space="preserve" stroke="#eee"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M405.02,161.533c-4.971,0-9,4.029-9,9v53.407h-18.298v-45.114c0-4.971-4.029-9-9-9h-41.756l-7.778-25.93 c-1.142-3.807-4.646-6.414-8.621-6.414h-63.575v-22.77h40.032c4.971,0,9-4.029,9-9V75.666c0-4.971-4.029-9-9-9H158.064 c-4.971,0-9,4.029-9,9v30.047c0,4.971,4.029,9,9,9h40.031v22.77h-92.714c-3.297,0-6.33,1.802-7.905,4.698l-15.044,27.646H47.227 c-4.971,0-9,4.029-9,9v45.114H18v-64.342c0-4.971-4.029-9-9-9s-9,4.029-9,9v186.008c0,4.971,4.029,9,9,9s9-4.029,9-9v-64.342h20.227 v47.64c0,4.971,4.029,9,9,9h74.936l34.26,44.207c1.705,2.2,4.331,3.487,7.114,3.487h205.185c4.971,0,9-4.029,9-9v-95.333h18.298 v53.407c0,4.971,4.029,9,9,9c26.05,0,47.243-21.193,47.243-47.243v-87.651C452.263,182.727,431.07,161.533,405.02,161.533z M18,263.264V241.94h20.227v21.324H18z M167.064,84.666h110.959v12.047H167.064V84.666z M216.096,114.713h12.896v22.77h-12.896 V114.713z M56.227,187.826h6.395v132.078h-6.395V187.826z M133.688,323.391c-1.705-2.2-4.331-3.487-7.114-3.487H80.622V187.826 h7.159c3.297,0,6.33-1.802,7.905-4.698l15.044-27.646h193.14l7.778,25.93c1.142,3.807,4.646,6.414,8.621,6.414h16.151v179.771 H167.948L133.688,323.391z M359.722,367.597h-5.302V187.826h5.302V367.597z M377.722,263.264V241.94h18.298v21.324H377.722z M434.263,296.428c0,12.986-8.508,24.022-20.243,27.827V180.95c11.735,3.804,20.243,14.84,20.243,27.827V296.428z"></path> </g></svg>
              <p>{{ item.motor }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="30" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              <p>{{ item.transmission }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="30" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2l0 72.8c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-72.8 47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240l0 32 96 0 0-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-32-96 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg>
              <p>{{ item.drive_side }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z"/></svg>
              <p>{{ item.petrol }}</p>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#e6e6e6" d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"/></svg>
              <p>{{ item.city.name }} cars</p>
            </td>
          </tr>
        </tbody>
        </table>
          <div class="detail-right__contact">
            <router-link to="">
              <div class="contact-logo whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
            </router-link>
            <a href="https://t.me/username" target="_blank">
              <div class="contact-logo tg">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="31" viewBox="0 0 496 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                </svg>
              </div>
            </a>
            <a href="tel:+998990000441">
              <div class="contact-logo tel">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
              </div>
            </a>
          </div>
          <div class="detail-right__form">
            <form @submit.prevent="submit">
              <p>{{ item.model.name }} / {{ item.color }}</p>
              <input type="text" name="" id="" placeholder="Name" v-model="name" required>
              <input type="number" name="" id="" placeholder="Phone" v-model="phone" required>
              <input type="number" name="" id="" placeholder="Period" v-model="period" required>
              <input type="text" name="" id="" placeholder="Detailes" v-model="detail" required>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


const cars = ref([]);
const details = ref([]);
const imgs = ref([]);
const shift = ref([]);
const route = useRoute();
const id = route.params.id;

const name = ref('');
const phone = ref('');
const period = ref('');
const detail = ref('');

const fetchDetail = async() =>{
  try{
    const response = await fetch(`https://realauto.limsa.uz/api/cars`)
    cars.value = await response.json();
    details.value = cars.value.data.filter(car => car.id === id)
    imgs.value = details.value[0].car_images
    shift.value = imgs.value.shift()
  }catch(error){
    console.error(error)
  }
}

const submit = () =>{
  toast("Muvaffaqiyatli jo'natildi!", {
        type: "success",
        autoClose: 2500,
        position: "top-center",
        transition: "flip",
      });
  name.value = ''
  phone.value = ''
  period.value = ''
  detail.value = ''
}

onMounted(() => {
  fetchDetail()
});
</script>
<style scoped>
 .container{
  width: 99.9%;
  background-color: #111017;
  border: 1px solid #333;
 }

 .row{
  max-width: 1240px;
  margin: 0 auto;
  color: #e5e4e4;
 }

 .detail{
  display: flex;
 }

 .detail-left{
  width: 610px;
  flex: 1;
 }

 .detail-left h1{
  font-size: 42px;
 }

 .detail-right{
  width: 610px;
  flex: 1;
  padding: 90px 0px 20px 20px;
 }

 .detail-right table{
  width: 590px;
  border-bottom: 1px solid #ffe;
  padding-bottom: 20px;
 }

 .detail-right .detail-right__price td{
  width: 90px;
 }

 .detail-right .detail-right__info td{
  display: inline-block;
  width: 115px;
  text-align: center;
 }

 .detail-right .small-size{
  font-size: 14px;
  color: rgb(112, 111, 111);
 }

 .images img{
  width: 350px;
 }

 .detail-right__contact{
  display: flex;
  justify-content: center;
  margin: 25px 0px;
  gap: 15px;
 }

 .contact-logo{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .whatsapp{
  border: 1px solid #aad161;
  border-radius: 1rem;
  background-color: #a7d74f;
 }
 .tg{
  border: 1px solid #5797d4;
  border-radius: 1rem;
  background-color: #5797d4;
 }
 .tel{
  border: 1px solid #d4da42;
  border-radius: 1rem;
  background-color: #dbc329;
 }

 .detail-right__form{
  width: 420px;
  border: 1px solid #fee;
  margin: 0 auto;
 }

 .detail-right__form p{
  font-size: 24px;
  margin: 10px 20px;
 }

 .detail-right__form input{
  width: 350px;
  height: 35px;
  margin: 10px 20px;
  padding: 10px;
  font-size: 20px;
  border-radius: .7rem;
  outline: none;
  }

 .detail-right__form button{
  width: 120px;
  height: 50px;
  margin: 10px 20px;
  font-size: 18px;
  background-color: #aad161;
  border-radius: .7rem;
 }
</style>