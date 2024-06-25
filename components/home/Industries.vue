<script setup>
import { retailsImg } from "../../utils/images";
function getImageUrl(name, ext) {
  return new URL(`./assets/imgs/${name}.${ext}`, import.meta.url).href;
}
</script>

<template>
  <div>
    hello
    <img :src="retailsImg" alt="" />
  </div>
</template>

<style scoped></style>
