<script setup>
import {
  towerEnergy,
  towerGroup,
  towerPower,
  onward,
  techMahindra,
  alex,
  asaba,
  buildingTower,
  hoesch,
  interdialog,
  kolorkote,
  Logo_digischool,
} from "../../utils/images";

const clients = [
  towerEnergy,
  towerGroup,
  towerPower,
  onward,
  techMahindra,
  alex,
  asaba,
  buildingTower,
  hoesch,
  interdialog,
  kolorkote,
  Logo_digischool,
];
</script>

<template>
  <section class="wrapper py-20">
    <HomeSubSectionTitle title="Our Clients" />
    <h2
      class="text-3xl pb-5 pt-1 md:text-4xl text-secondary mb-5 font-semibold w-9/12"
    >
      A Look At Our Esteemed & Valued Partners
    </h2>

    <swiper
      :breakpoints="{
        290: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },

        768: {
          slidesPerView: 4,
        },

        1024: {
          slidesPerView: 5,
        },
      }"
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
    >
      <swiperSlide v-for="(item, index) in clients" :key="index">
        <div class="shadow-xl border p-3">
          <img :src="item" alt="" class="w-full h-auto" />
        </div>
      </swiperSlide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  display: grid;
}

.swiper-slide {
  color: white;
  flex-shrink: 0;
  display: block;
  height: 100%;
  max-height: 100%;
}
</style>
