<script setup>
import { bg_1 } from "../../utils/images";

const whyUs = [
  {
    id: 1,
    icon: "grommet-icons:services",
    title: "Our Services",
    description:
      " Innovative, best suited, cost effective & successful business solution provider",
  },
  {
    id: 2,
    icon: "eos-icons:products",
    title: "Our Products",
    description:
      "Customer friendly, easy to use & low budget according to your needs.",
  },
  {
    id: 1,
    icon: "material-symbols:nest-wake-on-approach",
    title: "Our Approach",
    description: "24/7 support to our customers. Always happy to serve.",
  },
];
</script>

<template>
  <section
    :style="{ backgroundImage: `url(${bg_1})` }"
    class="py-10 bg-no-repeat bg-cover wrapper"
  >
    <div class="">
      <CommonSubSectionTitle title="Why us" />
      <CommonSectionTitle title="Why Choose Us" class="text-secondary" />
    </div>
    <div class="py-3">
      <div class="flex flex-wrap justify-center md:justify-between">
        <div
          v-for="item in whyUs"
          class="text-center bg-white/30 backdrop-blur shadow-2xl rounded-lg py-8 px-7 flex-grow flex-shrink basis-[300px] min-w-[300px] p-5 m-2 bg-blue-200"
        >
          <Icon :name="item.icon" class="text-6xl text-secondary" />
          <h3 class="text-secondary font-medium text-2xl py-4">
            {{ item.title }}
          </h3>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
