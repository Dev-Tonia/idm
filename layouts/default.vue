<script setup></script>

<template>
  <header class="fixed text-white z-20 w-full">
    <LayoutTopNavbar />
    <nav class="wrapper py-2 backdrop-blur">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="">
          <div class="h-10">
            <img
              src="../assets/imgs/idm_logo-white.png"
              alt="IDM-Logo"
              class="h-full"
            />
          </div>
        </NuxtLink>
        <Icon name="mynaui:menu" class="text-3xl" />
      </div>
    </nav>
  </header>

  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped></style>
