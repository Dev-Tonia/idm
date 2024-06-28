<script setup>
import { retailsImg } from "../../utils/images";
const items = [
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
  retailsImg,
];
</script>

<template>
  <section class="wrapper py-20">
    <HomeSubSectionTitle title=" Industries we serve" />
    <h2
      class="text-3xl pb-6 pt-1 md:text-4xl text-secondary mb-5 font-semibold w-9/12"
    >
      We strive to consistently and efficiently plan, execute and deliver high
      quality services and results across serval Industries
    </h2>

    <swiper
      :breakpoints="{
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="bg-secondary pb-7 rounded-xl overflow-hidden"
      >
        <div class="rounded-lg overflow-hidden">
          <img :src="retailsImg" alt="" class="w-full h-auto" />
        </div>
        <div class="px-3">
          <h4 class="font-bold mt-3">Retail</h4>
          <p>
            Manage POS, Inventory, Finances, Promotions & Schemes, Integrate
            Back End Procurements, and SKU with ease.
          </p>
        </div>
      </SwiperSlide>
    </swiper>
    <div class="py-7 flex justify-end">
      <CommonButton
        class="bg-primary text-xl font-semibold px-10 transition ease-in-out delay-300 hover:bg-secondary/90 hover:text-white"
      >
        View All Industries
      </CommonButton>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%; /* Adjust the percentage as needed */
  display: grid;
  /* gap: 20px; */
  /* Ensures proper alignment */
}

.swiper-slide {
  /* width: 500px; */
  color: white;
  flex-shrink: 0;
  display: block;
  height: 100%;
  max-height: 100%;
}

/* hide scrollbar but allow scrolling */
.element-scroll {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
}
.element-scroll::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>
