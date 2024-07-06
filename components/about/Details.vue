<template>
  <section id="details" class="py-24 text-secondary wrapper">
    <CommonSubSectionTitle title=" Who we are " />
    <CommonSectionTitle>
      About <span class="text-primary">IDM</span>
    </CommonSectionTitle>
    <div class="grid grid-cols-2 gap-5 items-center">
      <div class="">
        <div class="rounded-3xl w-full overflow-hidden">
          <img :src="aboutWhoWeAre" class="w-full h-auto" alt="" />
        </div>
      </div>
      <div>
        <div class="md:text-[17px]">
          <p class="my-5">
            International Data Management Services Limited (<span
              class="text-primary"
              >IDM</span
            >), incorporated in Nigeria in 1981 is affiliated with Comcraft
            Services Limited, United Kingdom with one goal in mind to help our
            clients in intelligent automation of their business. We specialize
            in <a href="/" class="font-semibold">SAP Business One</a>, an ERP
            solution from SAP, designed specifically for Micro, Small, &amp;
            Medium Enterprises. <span class="text-primary">IDM</span> is one of
            the <strong>largest partners for SAP Business One</strong> and a
            proud SAP Gold Partner in wes Africa. Our primary focus is to
            provide the
            <a href="/" class="font-semibold">best ERP solutions for MSMEs</a>,
            based on SAP Business One.
          </p>
          <p class="my-5">
            Started in 1981, we have worked across various industries. With
            numerous successful SAP implementations under our belt, we are one
            of the best ERP & Business Intelligence services companies in
            Nigeria and west Africa. We expertise in SAP Business One and SAP
            Business One, version for HANA, which is evident by our wide spread
            recognition for the same. In fact, SAP has awarded us for our
            performance in
            <a href="/" class="font-semibold">SAP Business One HANA.</a>
          </p>
        </div>
        <CommonButton
          class="bg-primary text-xl font-semibold px-4 xmd:px-8 transition ease-in-out delay-300 hover:bg-secondary/60 hover:text-white"
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
