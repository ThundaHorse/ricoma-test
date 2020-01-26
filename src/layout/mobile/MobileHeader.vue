<template>
  <div class="mobileHeader">
    <MobileTimer />
    <nav class="navbar navbar-expand-lg bg-light">
      <p class="navbar-brand head-lorem" href="/">Lorem Ipsum</p>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#cartDropdown"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <img
            src="../../assets/pictures/Cart Icon.svg"
            alt="cart"
            style="	height: 30px;	width: 37px;"
          />
        </span>
      </button>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          class="navbar-toggler-icon"
          style="background-color: black;"
        ></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="cartDropdown"
        style="background-color: grey;"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <p class="nav-link nav-lorem">
              Lorem <span class="sr-only">(current)</span>
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Ipsum</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Excepteur</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Consectetur</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Veniam</p>
          </li>
        </ul>
      </div>

      <div
        class="collapse navbar-collapse"
        id="navbarText"
        style="background-color: grey;"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <p class="nav-link nav-lorem">
              Lorem <span class="sr-only">(current)</span>
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Ipsum</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Excepteur</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Consectetur</p>
          </li>
          <li class="nav-item">
            <p class="nav-link nav-ipsum">Veniam</p>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.head-lorem {
  color: #000000;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 41px;
}
.nav-lorem,
.nav-ipsum {
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
}
</style>

<script>
import MobileTimer from "../../components/MobileTimer";

export default {
  components: {
    MobileTimer
  },
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
