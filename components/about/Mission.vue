<template>
  <section class="py-20 wrapper text-secondary bg-primary/[5%]">
    <div class="">
      <CommonSubSectionTitle title="mission " />
      <CommonSectionTitle>
        <span class="text-primary">IDM'S</span> Mission
      </CommonSectionTitle>
    </div>
    <div class="md:flex items-center gap-10">
      <div class="md:w-1/2">
        <img :src="mission" alt="" />
      </div>
      <div class="md:text-xl lg:text-2xl md:w-1/2">
        <p>
          Our core mission is to make African Enterprises Globally Competitive.
        </p>
        <p class="mt-5">
          Provide African enterprises perfect business processes and to also
          facilitate a culture of customer care management in African
          enterprises
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mission } from "../../utils/images";
</script>

<style lang="scss" scoped></style>
