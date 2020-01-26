<template>
  <div id="app">
    <router-view v-if="!getMobile" />
    <router-view v-else name="mobile" />
  </div>
</template>

<style></style>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: mapGetters(["getMobile"]),
  methods: {
    ...mapActions(["checkMobile"])
  }
};
</script>
