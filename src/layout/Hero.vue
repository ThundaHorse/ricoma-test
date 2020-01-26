<template>
  <div class="mainHero">
    <img
      src="../assets/pictures/Top Image.png"
      class="topImage"
      alt="Top Image"
    />

    <div class="heroText">
      <h1 class="heroLorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <p class="heroSubLorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button class="heroBtn"><p class="buttonLorem">Lorem</p></button>
    </div>
  </div>
</template>

<style>
.mainHero {
  height: 705px;
  background: url("../assets/pictures/Hero Background.png") no-repeat center
    100%;
  background-size: cover;
  z-index: 999999;
}
.heroText {
  width: 776px;
  margin-left: 79px;
  margin-top: 47px;
  padding-top: 47px;
}
.heroLorem {
  height: 356px;
  width: 603px;
  color: #ffffff;
  font-family: Poppins SemiBold;
  font-size: 83px;
  font-weight: 600;
  line-height: 89px;
  margin-left: 73px;
  margin-bottom: 37px;
}
.heroSubLorem {
  height: 93px;
  width: 603px;
  color: #ffffff;
  font-family: "Open Sans Regular";
  font-size: 16px;
  line-height: 31px;
  margin-left: 79px;
  margin-bottom: 37px;
}
.heroBtn {
  height: 48px;
  width: 255px;
  border-radius: 24px;
  margin-left: 79px;
  background-color: #000000;
  text-align: center;
}
p.buttonLorem {
  height: 16px;
  width: 123px;
  color: #ffffff;
  font-family: Poppins SemiBold;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  display: inline-block;
  padding-top: 14px;
  padding-bottom: 18px;
}
.topImage {
  height: 650px;
  width: 600px;
  position: absolute;
  margin-top: 100px;
  align-content: right;
  margin-left: 55%;
}
</style>

<script>
export default {
  name: "mainHero",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
