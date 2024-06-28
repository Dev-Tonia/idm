<script setup>
import { sliderImg2 } from "../../utils/images";
</script>

<template>
  <section
    class="wrapper py-20"
    :style="{ backgroundImage: `url(${sliderImg2})` }"
  >
    <div
      class="bg-primary/80 rounded-3xl w-11/12 xmd:w-9/12 mx-auto py-10 px-5 xmd:px-7"
    >
      <div class="text-gray-200">
        <HomeSubSectionTitle title="Contact Us" />

        <h2
          class="text-3xl pb-5 pt-1 md:text-4xl text-center text-white mb-5 font-semibold"
        >
          Let's Make Things Happen!
        </h2>

        <h3 class="font-medium">Talk to our team of IT experts today!</h3>
        <p>
          Learn how <span class="text-secondary font-bold"> IDM</span> can your
          business scale the final piece in the puzzle of uninterrupted growth
          of your business.
        </p>
        <div class="py-5">
          <CommonButton
            class="bg-secondary text-xl font-semibold px-4 xmd:px-8 transition ease-in-out delay-300 hover:bg-secondary/60 hover:text-white"
          >
            Contact Our Expert
          </CommonButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
