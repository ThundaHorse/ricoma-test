<template>
  <div class="mobileHero">
    <div class="hero">
      <img
        src="../../assets/pictures/Cart Icon.svg"
        alt="cart"
        style="	height: 30px;	width: 37px; margin-top: 10px; float: right; margin-right: 10px;"
        @click.prevent="toggle()"
      />
      <div v-show="showCart">
        <div class="container" style="margin-left: -300px;">
          <div class="cartDropDown" style="overflow: scroll;">
            <div class="cart-item" v-for="(item, idx) in getCart" :key="idx">
              <div class="item-card" style="margin-top: 23px;">
                <div class="item-pic">
                  <img
                    class="pic"
                    :src="require('../../assets/pictures/' + item.img + '.jpg')"
                    :alt="item.name"
                    style="float: left; margin-left: 15px;"
                  />
                </div>
                <div class="item-text">
                  <p
                    class="cart-item-title"
                    style="float: left; margin-left: 10px; margin-bottom: 0;"
                  >
                    Lorem ipsum 1
                  </p>
                  <div class="cart-blue">
                    <img
                      src="../../assets/pictures/White Check.svg"
                      alt="White Check"
                      class="color-check"
                      v-if="item.color === 'blue'"
                    />
                  </div>
                  <div class="cart-purple">
                    <img
                      src="../../assets/pictures/White Check.svg"
                      alt="White Check"
                      class="color-check"
                      v-if="item.color === 'purple'"
                    />
                  </div>
                  <div class="cart-pink">
                    <img
                      src="../../assets/pictures/White Check.svg"
                      alt="White Check"
                      class="color-check"
                      v-if="item.color === 'pink'"
                    />
                  </div>
                </div>
              </div>
              <p
                class="remove"
                @click.prevent="removeFromCart(idx)"
                style="margin-left: 120px; cursor: pointer;"
              >
                REMOVE
              </p>
              <div class="line" style="margin-top: 85px; margin-left: 20px;" />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="hero-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p class="hero-sub-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button class="hero-btn"><p class="btn-text">Lorem</p></button>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  height: 700px;
  background: url("../../assets/pictures/Hero Background.png") no-repeat center
    100%;
  background-size: cover;
}
.hero-lorem {
  color: #ffffff;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  padding-bottom: 10px;
}
.hero-sub-lorem {
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 18px;
  line-height: 20px;
  margin-top: 20px;
}
.hero-btn {
  height: 48px;
  width: 255px;
  border-radius: 24px;
  background-color: #000000;
  margin-top: 30px;
}
.btn-text {
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  padding-top: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      showCart: false
    };
  },
  computed: mapGetters(["getCart"]),
  created() {
    this.fetchCart();
  },
  methods: {
    ...mapActions(["fetchCart", "removeItem"]),
    toggle() {
      this.showCart = !this.showCart;
    },
    removeFromCart(i) {
      this.getCart.splice(i, 1);
    }
  }
};
</script>
