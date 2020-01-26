<template>
  <div class="home">
    <Header />
    <Hero />
    <ProductCards />
    <Footer />
  </div>
</template>

<style></style>

<script>
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
  }
};
</script>
