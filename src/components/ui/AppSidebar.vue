<template>
    <div class="sidebar" v-if="sidebar">
      <div class="sidebar-content">
        <ul>
            <li @click="close" class="close">close</li>
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
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
  export default {
    setup(){
      const store = useStore()
      const sidebar = computed(()=>store.state.sidebar)

      return{
        sidebar,
        close : ()=>{
          store.commit('removeSidebar')
        }
      }

    }

  }
</script>

<style scoped>
    .sidebar{
      position: fixed;
      width: 300px;
      right: 0;
      top: 0;
      bottom: 0;
      /* background:linear-gradient( #3b3939, #fcfaf rgb(59, 57, 57)000); */
      z-index: 100;
      padding: .5rem;
      backdrop-filter: blur(10px);
      box-shadow: -10px 0 10px rgba(0, 0, 0, 0.2);
    }
    .sidebar-content{
      text-align: left;
      line-height: 38px;
      color: #fff;
    }
    .sidebar-content ul{
      list-style: none;
    }
    
    .sidebar-content ul li a{
      text-decoration: none;
      font-size: 1.5em;
      text-align: left;
      color: #fff;
    }
    /* .sidebar-content ul li{
      text-decoration: none;
      color: #4a4747;
      line-height: 55px;
      font-size: 18px;
    }
    .sidebar-content ul li .noDecoration:hover{
      text-decoration: none;
      color: #e41111;
      font-size: 20px;
    } */

    @media (max-width:768px) {
        .sidebar{
            width: 450px;
            max-width: 90%;
        }
    }
</style>