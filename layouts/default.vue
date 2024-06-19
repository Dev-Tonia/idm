<script setup></script>

<template>
  <header>
    <LayoutTopNavbar />
    <nav class="h-9 overflow-hidden">
      <NuxtLink to="/" class="w-24">
        <img src="../assets/imgs/idm_logo.png" alt="IDM-Logo" class="h-auto" />
      </NuxtLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped></style>
