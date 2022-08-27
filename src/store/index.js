import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCartQuantity: 0,
  },
  getters: {
  },
  mutations: {
    setTotalCartQuantity(state, totalCartQuantity) {
        state.totalCartQuantity = totalCartQuantity
    },
    getTotalCartQuantity(state){
      const products = JSON.parse(localStorage.getItem("cartList")) || []
      let quantity = 0
      products.forEach((product)=>{
        quantity += Number(product.quantity)
      })
      state.totalCartQuantity = quantity
    }
  },
  actions: {
  },
  modules: {
  }
})
