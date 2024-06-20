<script setup lang="ts"></script>

<template>
  <div class="bg-primary text-white wrapper">
    <div class="px-3 py-2 xsm:flex items-center justify-between">
      <ul class="font-roboto text-xs xmd:flex font-medium">
        <li class="xmd:border-e xmd:pe-4">
          Call Us:<NuxtLink
            to="tel:+234+2348171229683"
            rel="noreferrer noopener"
            target="_blank"
            external
          >
            +234 (0) 8171229683
          </NuxtLink>
        </li>
        <li class="xmd:ps-4">
          Email Us:
          <NuxtLink
            to="mailto:info@idmng.net"
            rel="noreferrer noopener"
            target="_blank"
            external
          >
            info@idmng.net
          </NuxtLink>
        </li>
      </ul>
      <div class="pt-2 xsm:pt-0 space-x-1 flex items-center">
        <NuxtLink
          to="https://www.facebook.com/IDM.Services.Nigeria/posts/3195764740547071"
          rel="noreferrer noopener"
          target="_blank"
          external
        >
          <Icon name="line-md:facebook" class="text-xl" />
        </NuxtLink>
        <NuxtLink
          to=" https://twitter.com/IDMServicesLtd/status/1315601835231719427"
          rel="noreferrer noopener"
          target="_blank"
          external
        >
          <Icon name="akar-icons:twitter-fill" class="text-xl" />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/company/international-data-management-serivces-plc---nigeria/about/?viewAsMember=true"
          rel="noreferrer noopener"
          target="_blank"
          external
        >
          <Icon name="ri:linkedin-fill" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
