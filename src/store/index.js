import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: "glasses",
        name: "Glasses",
        color: ""
      },
      {
        id: 2,
        img: "chair",
        name: "Chair",
        color: ""
      },
      {
        id: 3,
        img: "airpods",
        name: "AirPods",
        color: ""
      },
      {
        id: 4,
        img: "plant",
        name: "Plant",
        color: ""
      }
    ],
    cart: []
  },
  getters: {
    getCart: state => state.cart,
    getProducts: state => state.products
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        let itemList = this.state.products.map(i => {
          return i;
        });
        commit("setItems", itemList);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchCart({ commit }) {
      try {
        let cartList = this.state.cart.map(i => {
          return i;
        });
        commit("setCart", cartList);
      } catch (e) {
        console.log(e);
      }
    },
    async addItemToCart({ commit }, itemToAdd) {
      try {
        let updatedCart = this.state.cart.map(i => {
          return i;
        });
        updatedCart.push(itemToAdd);
        commit("setCart", updatedCart);
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    setItems: (state, products) => (state.products = products),
    setCart: (state, cart) => (state.cart = cart)
  }
});
