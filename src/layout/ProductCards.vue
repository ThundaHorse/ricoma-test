<template>
  <div class="productCards">
    <div
      class="card-deck"
      style="margin-top: 100px; margin-right: 225px; margin-left: 225px;"
    >
      <div
        class="product mx-auto"
        v-for="(item, idx) in getProducts"
        :key="idx"
      >
        <div class="prod-image">
          <img
            :src="require('../assets/pictures/' + item.img + '.jpg')"
            :alt="item.name"
            class="product-image"
          />
        </div>
        <div class="prod-body">
          <p class="product-title">Lorem ipsum 1</p>
          <p class="product-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div class="colors">
            <div class="blue" @click.prevent="setColor(item, 'blue')">
              <img
                src="../assets/pictures/White Check.svg"
                alt="White Check"
                class="color-check"
                v-if="item.color === 'blue'"
              />
            </div>
            <div class="purple" @click.prevent="setColor(item, 'purple')">
              <img
                src="../assets/pictures/White Check.svg"
                alt="White Check"
                class="color-check"
                v-if="item.color === 'purple'"
              />
            </div>
            <div class="pink" @click.prevent="setColor(item, 'pink')">
              <img
                src="../assets/pictures/White Check.svg"
                alt="White Check"
                class="color-check"
                v-if="item.color === 'pink'"
              />
            </div>
          </div>
        </div>
        <div class="product-footer">
          <p class="addProductToCart" @click.prevent="afterAdd(item)">
            Add To Cart
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.productCards {
  height: 745px;
}
.card-deck {
  overflow: scroll;
  height: 100%;
}
.card-deck::-webkit-scrollbar {
  display: none;
}
.product {
  box-sizing: border-box;
  height: 567px;
  max-width: 302px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
}
.product-image {
  height: 222px;
  width: 301px;
  border-radius: 12px 12px 0 0;
}
.prod-body {
  height: 275px;
  padding-top: 22px;
}
.product-title {
  height: 33px;
  width: 165px;
  color: #000000;
  font-family: Poppins SemiBold;
  font-size: 23px;
  font-weight: 600;
  line-height: 33px;
  margin-left: 21.5px;
  margin-bottom: 0;
}
.product-desc {
  height: 56px;
  width: 255px;
  color: #000000;
  font-family: "Open Sans Regular";
  font-size: 16px;
  line-height: 24px;
  margin-left: 21.5px;
  margin-top: 7px;
  margin-right: 25.5px;
}
.blue {
  height: 32px;
  width: 32px;
  border-radius: 5px;
  background-color: #143061;
  margin-left: 21.5px;
  margin-right: 6px;
  float: left;
  cursor: pointer;
}
.purple {
  height: 32px;
  width: 33px;
  border-radius: 5px;
  background-color: #81396f;
  margin-left: 6px;
  margin-right: 6px;
  float: left;
  cursor: pointer;
}
.pink {
  height: 32px;
  width: 32px;
  border-radius: 5px;
  background-color: #f6437d;
  margin-left: 6px;
  float: left;
  cursor: pointer;
}
.product-footer {
  height: 69px;
  width: 301px;
  border-radius: 0 0 12px 12px;
  background-color: #000000;
  display: inline-block;
}
.addProductToCart {
  height: 16px;
  width: 123px;
  color: #ffffff;
  font-family: Poppins SemiBold;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  display: inline-block;
  margin: 27px 89px 26px 89px;
  cursor: pointer;
}
.color-check {
  margin-left: 4px;
  margin-top: 2px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "productCards",
  data: function() {
    return {};
  },
  computed: mapGetters(["getProducts", "getCart"]),
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(["addItemToCart", "fetchProducts", "selectColor"]),
    getPic(item) {
      return "../assets/pictures" + item + ".jpg";
    },
    setColor(item, color) {
      item.color = color;
      this.selectColor();
    },
    afterAdd(item) {
      this.addItemToCart(item);
      alert(`Successfully added ${item.name} to the cart!`);
    }
  }
};
</script>
