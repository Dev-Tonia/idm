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
          <h6
            class="border-l-2 border-l-gray-950 py-1 px-2 font-semibold text-xl"
          >
            About us
          </h6>
          <h2 class="text-3xl md:text-4xl text-secondary mb-5 font-semibold">
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
            class="bg-secondary text-xl font-semibold px-10 transition ease-in-out delay-300 hover:bg-primary/90 hover:text-white"
            >Read More</CommonButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
