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
    cart: [],
    isMobile: false
  },
  getters: {
    getMobile: state => state.isMobile,
    getCart: state => state.cart,
    getProducts: state => state.products
  },
  actions: {
    checkMobile({ commit }, win) {
      //
      commit("setMobile", win);
    },
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
    },
    async selectColor({ commit }, item) {
      try {
        let cart = this.state.cart.map(i => {
          this.state.cart.find(o => o.id === item.id) || i;
        });
        commit("setItem", cart);
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    setMobile: (state, isMobile) => (state.isMobile = isMobile),
    setItems: (state, products) => (state.products = products),
    setItem: (state, product) => (state.product = product),
    setCart: (state, cart) => (state.cart = cart)
  }
});
