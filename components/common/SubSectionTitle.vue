<template>
  <h6 class="border-l-2 border-l-gray-950 py-1 px-2 font-semibold text-sm">
    {{ title }}
  </h6>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped></style>
