<script setup>
const slides = [
  {
    title: " Transform Your Business with Our ERP Expertise.",
    subtitle: "Streamline Operations, Enhance Efficiency, and Drive Growth.",
  },
  {
    title: "We Provide the Solutions to Grow your Business",
    subtitle: "Everything you need to grow your business. Contact Us today!",
  },
  {
    title: " Transform Your Business with Our ERP Expertise.",
    subtitle: "Streamline Operations, Enhance Efficiency, and Drive Growth.",
  },
];
</script>
<template>
  <section
    id="hero"
    class="flex flex-col justify-end items-center w-full overflow-hidden h-[90vh] relative pt-20"
  >
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-200%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class=""
    >
      <SwiperSlide v-for="slide in slides" :key="slide">
        <div>
          <h6
            class="font-bold text-white text-2xl xsm:text-3xl sm:text-4xl md:text-5xl"
          >
            {{ slide.title }}
          </h6>
          <p
            class="xsm:text-lg sm:text-xl md:text-2xl text-gray-300 pt-2 font-medium text-center mx-auto"
          >
            {{ slide.subtitle }}
          </p>
          <button
            class="text-primary rounded-full px-5 font-bold my-4 py-2 bg-white transition ease-in-out delay-150 hover:bg-white/10 hover:text-white hover:shadow"
          >
            Talk to us
          </button>
        </div>
      </SwiperSlide>
    </Swiper>

    <svg
      class="hero-waves block w-full h-14 relative"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="wave1">
        <use
          xlink:href="#wave-path"
          x="50"
          y="3"
          fill="rgba(255,255,255, .1)"
        />
      </g>
      <g class="wave2">
        <use
          xlink:href="#wave-path"
          x="50"
          y="0"
          fill="rgba(255,255,255, .2)"
        />
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff" />
      </g>
    </svg>
  </section>
</template>

<style scoped>
#hero {
  background: linear-gradient(
    0deg,
    rgb(238, 54, 63) 100%,
    rgb(237, 238, 243) 0%
  );
}
#hero:before {
  content: "";
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
}

.wave1 use {
  animation: move-forever1 10s linear infinite;
  animation-delay: -2s;
}

.wave2 use {
  animation: move-forever2 8s linear infinite;
  animation-delay: -2s;
}

.wave3 use {
  animation: move-forever3 6s linear infinite;
  animation-delay: -2s;
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.swiper-slide p {
  width: 80%; /* Adjust as needed */
  max-width: 600px; /* Adjust as needed */
}
</style>
