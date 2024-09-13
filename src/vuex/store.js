import { createStore } from "vuex";

export default createStore({
    state(){
        return{
            sidebar:false
        }
    },
    mutations:{
        setSidebar(state){
            state.sidebar = true
          },
          removeSidebar(state){
            state.sidebar = false
          }
    }
})