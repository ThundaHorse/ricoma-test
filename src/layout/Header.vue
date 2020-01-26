<template>
  <div class="headerLinks" :style="updateHeaderStyle()">
    <img
      src="../assets/pictures/Close Button.svg"
      style="float: right; padding-right: 31px; padding-top:15px; cursor: pointer;"
      alt="close"
      @click.prevent="hideTimer()"
    />
    <Timer v-if="showTimer" />
    <div class="container-fluid">
      <div class="row" style="margin-top: 5px;">
        <div v-show="showCart">
          <div class="cartDropDown" style="overflow: scroll;">
            <div class="cart-item" v-for="(item, idx) in getCart" :key="idx">
              <div class="item-card" style="margin-top: 23px;">
                <div class="item-pic">
                  <img
                    class="pic"
                    :src="require('../assets/pictures/' + item.img + '.jpg')"
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
                      src="../assets/pictures/White Check.svg"
                      alt="White Check"
                      class="color-check"
                      v-if="item.color === 'blue'"
                    />
                  </div>
                  <div class="cart-purple">
                    <img
                      src="../assets/pictures/White Check.svg"
                      alt="White Check"
                      class="color-check"
                      v-if="item.color === 'purple'"
                    />
                  </div>
                  <div class="cart-pink">
                    <img
                      src="../assets/pictures/White Check.svg"
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
        <div class="col-sm" style="margin-left: 73px;">
          <p class="header-lorem-ipsum">Lorem Ipsum</p>
        </div>
        <div class="col-sm">
          <p class="lorem">Lorem</p>
        </div>
        <div class="col-sm">
          <p class="ipsum">Ipsum</p>
        </div>
        <div class="col-sm">
          <p class="excepteur">Excepteur</p>
        </div>
        <div class="col-sm">
          <p class="consectetur">Consectetur</p>
        </div>
        <div class="col-sm">
          <p class="veniam">Veniam</p>
        </div>
        <div class="col-sm">
          <img
            src="../assets/pictures/Cart Icon.svg"
            alt="cart"
            @click.prevent="toggle()"
            style="height: 30px; width: 37px; margin-top: 5px;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header-lorem-ipsum {
  height: 41px;
  width: 159px;
  color: #000000;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 41px;
}
.lorem {
  height: 31px;
  width: 62px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
.ipsum {
  height: 31px;
  width: 59px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
.excepteur {
  height: 31px;
  width: 112px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
.consectetur {
  height: 31px;
  width: 135px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
.veniam {
  height: 31px;
  width: 74px;
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
.triangle {
  height: 6px;
  width: 8px;
  transform: scaleY(-1);
  background-color: #a0a2a6;
}
.cartDropDown {
  box-sizing: border-box;
  height: 299px;
  width: 317px;
  border: 1px solid #e6e6e7;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  z-index: 10;
  margin-top: 60px;
  align-content: right;
  margin-left: 73%;
}
.cartDropDown::-webkit-scrollbar {
  display: none;
}
.cart-item {
  width: 300px;
  height: 92px;
}
.pic {
  height: 92px;
  width: 95px;
  border-radius: 6px 6px 6px 6px;
}
.cart-item-title {
  height: 33px;
  width: 165px;
  color: #000000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  line-height: 33px;
}
.cart-colors {
  height: 27px;
  width: 150px;
}
.cart-blue {
  height: 26px;
  width: 26px;
  border-radius: 5px;
  background-color: #143061;
  float: left;
  margin-right: 2px;
  margin-left: 10px;
}
.cart-purple {
  height: 26px;
  width: 27px;
  border-radius: 5px;
  background-color: #81396f;
  float: left;
  margin-left: 5px;
  margin-right: 2px;
}
.cart-pink {
  height: 26px;
  width: 26px;
  border-radius: 5px;
  background-color: #f6437d;
  float: left;
  margin-left: 5px;
  margin-right: 2px;
}
.remove {
  height: 24px;
  width: 53px;
  color: #646a70;
  font-family: "Open Sans";
  font-size: 13px;
  line-height: 24px;
}
.line {
  box-sizing: border-box;
  height: 1px;
  width: 266px;
  border: 1px solid #979797;
  opacity: 0.35;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

import Timer from "../components/Timer";

export default {
  name: "headerLinks",
  components: {
    Timer
  },
  data: function() {
    return {
      showTimer: true,
      showCart: false
    };
  },
  computed: mapGetters(["getCart"]),
  created() {
    this.fetchCart();
  },
  methods: {
    ...mapActions(["fetchCart", "removeItem"]),
    hideTimer() {
      this.showTimer = false;
    },
    updateHeaderStyle() {
      if (this.showTimer) {
        return "height: 66px; margin-bottom: 50px;";
      } else {
        return "height: 66px; margin-bottom: 0;";
      }
    },
    toggle() {
      this.showCart = !this.showCart;
    },
    removeFromCart(i) {
      this.getCart.splice(i, 1);
    }
  }
};
</script>
