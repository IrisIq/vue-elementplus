<template>
  <div class="not-found">
    <img src="../assets/404.gif"
         alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
  components: {},
  setup() {},
});
</script>

<style scoped>
.notfound {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.notfound img {
  width: 100%;
  height: 100%;
}
</style>
