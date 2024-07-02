<template>
  <ul class="flex items-center space-x-4">
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase" to="/about"> About Us </NuxtLink>
    </li>
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase"> Software Services</NuxtLink>
    </li>
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase"> IDM School </NuxtLink>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="sap.option"
        @toggle="handleButtonClick(sap.title)"
        :isOpen="openDropdownIndex === sap.title"
        itemClass="w-80"
      >
        <span class="uppercase">{{ sap.title }}</span>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="products.option"
        @toggle="handleButtonClick(products.title)"
        :isOpen="openDropdownIndex === products.title"
        itemClass="w-80"
      >
        <span class="uppercase">{{ products.title }}</span>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik uppercase font-medium text-[#3c3d41]">
      <LayoutDropdown
        :dropdownOptions="industry.option"
        @toggle="handleButtonClick(industry.title)"
        :isOpen="openDropdownIndex === industry.title"
        itemClass="w-80"
      >
        <span class="uppercase">{{ industry.title }}</span>
      </LayoutDropdown>
    </li>
    <li class="text-sm font-rubik font-medium text-[#3c3d41] w-">
      <NuxtLink class="uppercase"> Contact Us </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
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
