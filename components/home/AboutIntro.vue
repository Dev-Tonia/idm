<script setup>
import { aboutIntroImg } from "../../utils/images";
</script>
<template>
  <section class="wrapper bg-[#EFF1F9] py-20">
    <div
      class="flex flex-col-reverse md:flex-row gap-10 place-content-center text-secondary items-center"
    >
      <div class="md:w-1/2">
        <div class="rounded-3xl w-full overflow-hidden">
          <img :src="aboutIntroImg" class="w-full h-auto" alt="" />
        </div>
      </div>

      <div class="md:w-1/2">
        <div>
          <HomeSubSectionTitle title=" About Us" />
          <h2
            class="text-3xl md:text-4xl text-secondary pb-5 pt-1 font-semibold"
          >
            We Are Increasing Business Success With
            <span class="text-primary/90">IT Solution</span>
          </h2>
        </div>
        <p class="text-gray-600 text-xl mb-5">
          Collaboratively envisioned user friendly supply chains and cross unit
          imperative. Authoritative fabricate competitive resource and holistic
          synergy. Uniquely generate efficient schemas before future.
        </p>

        <div>
          <CommonButton
            class="bg-primary text-xl font-semibold px-10 transition ease-in-out delay-300 hover:bg-secondary/90 hover:text-white"
            >Read More</CommonButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
