<script setup>
const { title, description } = defineProps(["title", "description"]);
</script>
<template>
  <div class="bg-white py-5 px-4 rounded-lg shadow-lg mt-5">
    <div class="flex flex-col items-center justify-center w-8/12 mx-auto">
      <slot />
      <h2 class="text-xl font-medium md:text-2xl py-3">{{ title }}</h2>
    </div>

    <p>
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
