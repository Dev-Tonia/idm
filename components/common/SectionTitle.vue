<template>
  <h2 class="text-2xl xsm:text-3xl md:text-4xl pb-5 pt-1 font-semibold">
    <slot>
      {{ title }}
    </slot>
  </h2>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped></style>
