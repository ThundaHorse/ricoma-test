<template>
  <div class="home">
    <div v-if="getMobile === false">
      <Header />
      <Hero />
      <ProductCards />
      <Footer />
    </div>
    <div v-else>
      <h1>Hollup</h1>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapActions, mapGetters } from "vuex";

import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Footer from "../layout/Footer";
import ProductCards from "../layout/ProductCards";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    ProductCards,
    Footer
  },
  data() {
    return {};
  },
  created() {
    this.onResize();
  },
  computed: mapGetters(["getMobile"]),
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    ...mapActions(["checkMobile"]),
    beforeDestroy() {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", this.onResize, { passive: true });
      }
    },
    onResize() {
      let winSize = window.innerWidth <= 1025;
      this.checkMobile(winSize);
    }
  }
};
</script>
