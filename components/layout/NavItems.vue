<template>
  <ul class="flex items-center space-x-4">
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase" to="/about"> Home </NuxtLink>
    </li>

    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="navLinks.services.items"
        @toggle="handleButtonClick(navLinks.services.title)"
        :isOpen="openDropdownIndex === navLinks.services.title"
        itemClass="w-80 px-4 py-3"
      >
        <template v-slot:title>
          <span class="uppercase">Service</span>
        </template>
        <template v-slot:top-extra>
          <span class="uppercase">{{ navLinks.services.title }}</span>
        </template>
        <template v-slot:b-extra>
          <NuxtLink to="/"> School </NuxtLink>
        </template>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="navLinks.industries.items"
        @toggle="handleButtonClick(navLinks.industries.title)"
        :isOpen="openDropdownIndex === navLinks.industries.title"
        itemClass="w-80"
      >
        <template v-slot:title>
          <span class="uppercase">{{ navLinks.industries.title }}</span>
        </template>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="navLinks.solutions.items"
        @toggle="handleButtonClick(navLinks.solutions.title)"
        :isOpen="openDropdownIndex === navLinks.solutions.title"
        itemClass="w-80"
      >
        <template v-slot:title>
          <span class="uppercase">{{ navLinks.solutions.title }}</span>
        </template>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="navLinks.about.items"
        @toggle="handleButtonClick(navLinks.about.title)"
        :isOpen="openDropdownIndex === navLinks.about.title"
        itemClass="w-80"
      >
        <template v-slot:title>
          <span class="uppercase">{{ navLinks.about.title }}</span>
        </template>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase"> Contact Us </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { navLinks } from "../../utils/nav";

const sap = {
  title: "Sap Solutions",
  option: [
    {
      title: "SAP Services",
      routeTo: "/",
    },
    {
      title: "Cloud hosting",
      routeTo: "/",
    },
    {
      title: "SAP Business By Design",
      routeTo: "/",
    },
    {
      title: "SAP S/4 Hana",
      routeTo: "/",
    },
    {
      title: "SAP Business Technology",
      routeTo: "/",
    },
    {
      title: "Bi & Analytics solution",
      routeTo: "/",
    },
  ],
};
const products = {
  title: "Products",
  option: [
    {
      title: "Distribution Management System",
      routeTo: "/",
    },
    {
      title: "Medical Value Representative ",
      routeTo: "/",
    },
    {
      title: "Point of sale",
      routeTo: "/",
    },
    {
      title: "Sales Force Automation",
      routeTo: "/",
    },
    {
      title: "Customer Relation Management  ",
      routeTo: "/",
    },
    {
      title: " Software Development ",
      routeTo: "/",
    },
  ],
};
const industry = {
  title: "Industries",
  option: [
    {
      title: "Process manufacturing",
      routeTo: "/",
    },
    {
      title: "Retail Industry ",
      routeTo: "/",
    },
    {
      title: "Discrete Manufacturing",
      routeTo: "/",
    },
    {
      title: "Transport and Logistics",
      routeTo: "/",
    },
    {
      title: "Renewable Energy    ",
      routeTo: "/",
    },
    {
      title: "Wholesale And Distribution ",
      routeTo: "/",
    },
    {
      title: "Professional Services ",
      routeTo: "/",
    },
  ],
};

const openDropdownIndex = ref(null);
function handleButtonClick(index) {
  openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
}
</script>

<style lang="scss" scoped></style>
