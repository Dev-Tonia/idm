<script setup></script>

<template>
  <header class="sticky top-0 text-white z-20 w-full">
    <LayoutTopNavbar />
    <nav class="wrapper py-2 backdrop-blur bg-white/75">
      <div
        class="flex items-center min-[930px]:flex-col min-[1005px]:flex-row justify-between"
      >
        <NuxtLink to="/" class="">
          <div class="h-10">
            <img
              src="../assets/imgs/idm_logo.png"
              alt="IDM-Logo"
              class="h-full"
            />
          </div>
        </NuxtLink>

        <LayoutNavItems class="hidden min-[930px]:flex" />

        <Icon
          name="mynaui:menu"
          class="text-3xl block text-gray-950 min-[930px]:hidden"
        />
      </div>
    </nav>
  </header>

  <main>
    <slot></slot>
  </main>

  <LayoutFooter />
</template>

<style lang="scss" scoped></style>
