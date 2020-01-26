<template>
  <div class="mobile">
    <div class="child">
      <MobileHeader />
      <MobileHero />
      <MobileProducts />
    </div>
    <MobileFooter />
  </div>
</template>

<style>
.mobile {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.child {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}
</style>

<script>
import MobileHeader from "../layout/mobile/MobileHeader";
import MobileHero from "../layout/mobile/MobileHero";
import MobileProducts from "../layout/mobile/MobileProducts";
import MobileFooter from "../layout/mobile/MobileFooter";

export default {
  name: "mobile",
  components: {
    MobileHeader,
    MobileHero,
    MobileProducts,
    MobileFooter
  },
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
