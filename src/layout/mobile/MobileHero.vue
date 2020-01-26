<template>
  <div class="mobileHero">
    <div class="hero">
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
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
