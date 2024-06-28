<script setup>
import { ref } from "vue";
import { brandLogo } from "../../utils/images";
import { navLinks } from "../../utils/nav";
const date = ref(new Date());
const currentYear = date.value.getFullYear();

// accordion
const isOpen = ref(true);
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <footer class="bg-[#000017] py-4">
    <div class="md:grid md:grid-cols-3 gap-6 wrapper">
      <div class="mb-6 md:mb-0 md:col-span-1">
        <NuxtLink to="/" class="">
          <img
            :src="brandLogo"
            class="mr-3 h-12 w-full object-contain"
            alt="brand Logo"
          />
        </NuxtLink>
        <div class="text-gray-400 py-4">
          <p class="mb-2">
            International Data Management Services Limited (IDM), incorporated
            in Nigeria in 1981 is affiliated with Comcraft Services Limited,
            United Kingdom.
          </p>
          <p>
            <span class="text-primary">IDM's</span> is on the mission To Make
            Africa Enterprises Globally Competitive. Provide African Enterprises
            Perfect Business Processes. To Facilitate a Culture of Customer Care
            Management in African Enterprises.
          </p>
        </div>
        <div class="mt-4 flex items-center gap-3 md:block">
          <span class="text-gray-300 inline-block mb-2"> Follows on:</span>
          <LayoutSocials class="gap-x-6" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:col-span-2">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white"
          >
            Service
          </h2>
          <ul class="text-gray-400">
            <li class="mb-2">
              <div class="space-x-8 font-medium mb-4" @click="toggleIsOpen">
                <span>SAP</span> <Icon name="ep:arrow-down-bold" />
              </div>
              <div v-if="isOpen" class="ml-3">
                <NuxtLink
                  class="hover:underline block text-sm mb-2"
                  v-for="(service, index) in navLinks.services.items"
                  :key="index"
                  :herf="service.to"
                >
                  {{ service.name }}
                </NuxtLink>
              </div>
            </li>
            <li>
              <NuxtLink class="hover:underline text-sm font-medium" to="/">
                Schools
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">
            Industries
          </h2>
          <ul class="text-gray-400">
            <li
              class="mb-2"
              v-for="(industry, index) in navLinks.industries.items"
              :key="index"
            >
              <NuxtLink :href="industry.to" class="hover:underline">{{
                industry.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">
            Solutions
          </h2>
          <ul class="text-gray-400">
            <li
              class="mb-2"
              v-for="(solution, index) in navLinks.solutions.items"
              :key="index"
            >
              <NuxtLink :href="solution.to" class="hover:underline">{{
                solution.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between wrapper">
      <span class="text-sm text-gray-500 sm:text-center mb-4 sm:mb-0"
        >© {{ currentYear }}
        <NuxtLink to="/" class="hover:underline text-primary font-medium">
          IDM
        </NuxtLink>
        . All Rights Reserved.
      </span>
      <SocialLinks class="gap-x-6" />
    </div>
  </footer>
</template>

<style scoped></style>
