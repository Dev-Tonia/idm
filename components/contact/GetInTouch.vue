<template>
  <section class="wrapper py-16 bg-secondary/5">
    <div class="grid grid-cols-5 gap-10 items-center">
      <div class="col-span-2">
        <h2 class="text-2xl font-semibold mb-4">Get In Touch</h2>
        <!-- <i class="ri-map-pin-fill"></i> -->
        <div class="mb-5">
          <span
            class="inline-block bg-primary/15 text-secondary py-2 px-3 rounded-lg"
          >
            <Icon name="ri:mail-send-fill" class="text-4xl" />
          </span>
          <span>
            <a href="mailto:complaints@easypaybills.ng">
              complaints@easypaybills.ng</a
            ></span
          >
        </div>
        <!-- <i class="ri-smartphone-fill"></i> -->
        <div class="mb-5">
          <span
            class="inline-block bg-primary bg-opacity-10 py-2 px-3 rounded-lg"
          >
            <Icon name="ri-map-pin-fill" class="text-4xl" />
          </span>
          <span>
            28, Henry Carr Industrial Estate, Off Akanni Doherty Way, Guiness
            Bus/Stop, Ikeja, Lagos.</span
          >
        </div>
        <div class="mb-5 flex gap-2 item-center">
          <span
            class="inline-block bg-primary bg-opacity-10 py-2 px-3 rounded-lg"
          >
            <Icon name="ri-smartphone-fill" class="text-4xl" />
          </span>
          <span class="flex flex-col">
            <a href="tel:+2349087610511">+2349087610511</a>
          </span>
        </div>
      </div>
      <div class="col-span-3">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
