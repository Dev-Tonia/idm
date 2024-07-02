<template>
  <div
    :class="[` h-[80vh] bg-no-repeat bg-cover  relative`]"
    :style="{ backgroundImage: `url(${aboutUsImg})` }"
  >
    <div
      class="absolute bg-black/60 top-0 bottom-0 right-0 left-0 flex text-white flex-col items-center justify-center"
    >
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold">
        About <span class="text-primary">IDM</span>
      </h2>
      <p class="font-medium text-gray-200 py-4">
        We are here to make your business to excel
      </p>
      <a
        class="bg-primary text-xl e rounded-3xl py-3 font-semibold px-10 transition ease-in-out delay-300 hover:bg-secondary/90 hover:text-white"
        href="#details"
        >Discover More about us</a
      >
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);

import { aboutUsImg } from "../../utils/images";
</script>

<style scoped></style>
