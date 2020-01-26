<template>
  <div class="mobile-products">
    <div
      class="product mx-auto mb-3 mt-2"
      v-for="(item, idx) in getProducts"
      :key="idx"
    >
      <div class="prod-image">
        <img
          :src="require('../../assets/pictures/' + item.img + '.jpg')"
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
              src="../../assets/pictures/White Check.svg"
              alt="White Check"
              class="color-check"
              v-if="item.color === 'blue'"
            />
          </div>
          <div class="purple" @click.prevent="setColor(item, 'purple')">
            <img
              src="../../assets/pictures/White Check.svg"
              alt="White Check"
              class="color-check"
              v-if="item.color === 'purple'"
            />
          </div>
          <div class="pink" @click.prevent="setColor(item, 'pink')">
            <img
              src="../../assets/pictures/White Check.svg"
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
</template>

<style>
.mobile-products {
  height: 100vh;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
