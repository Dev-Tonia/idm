<template>
  <section id="details" class="py-24 text-secondary wrapper">
    <CommonSubSectionTitle title=" Who we are " />
    <CommonSectionTitle>
      About <span class="text-primary">IDM</span>
    </CommonSectionTitle>
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <div class="">
        <div class="rounded-3xl w-full overflow-hidden">
          <img :src="aboutWhoWeAre" class="w-full h-auto" alt="" />
        </div>
      </div>
      <div>
        <div class="lg:text-[17px] 2xl:text-2xl">
          <p class="my-5">
            International Data Management Services Limited (<span
              class="text-primary"
              >IDM</span
            >), incorporated in Nigeria in 1981 is affiliated with Comcraft
            Services Limited, United Kingdom with one goal in mind to help our
            clients in intelligent automation of their business. Partnering with
            SAP, IDM specializes in implementing SAP based ERP, SCM & CRM system
            for mid- sized growing enterprises. IDM also specializes in teaching
            latest IT technology with world class curriculum in schools in
            affiliation with the Oxford University Press.
          </p>
        </div>
        <CommonButton
          class="bg-primary text-lg font-semibold px-4 xmd:px-8 transition ease-in-out delay-300 hover:bg-secondary/60 hover:text-white"
        >
          Contact Our Expert
        </CommonButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutWhoWeAre } from "../../utils/images";
</script>

<style lang="scss" scoped></style>
