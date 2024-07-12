<template>
  <div
    :class="[` h-[70vh] bg-no-repeat bg-cover  relative`]"
    :style="{ backgroundImage: `url(${contactUs})` }"
  >
    <div
      class="absolute bg-black/70 top-0 bottom-0 right-0 left-0 flex text-white flex-col items-center justify-center"
    >
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold">Contact Us</h2>
      <p class="font-medium text-gray-200 py-4">
        We are here to make your business to excel
      </p>
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);

import { contactUs } from "../../utils/images";
</script>

<style scoped></style>
