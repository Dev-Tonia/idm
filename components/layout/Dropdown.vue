<template>
  <div class="relative">
    <button @mouseenter="toggle" @mouseleave="toggle" class="anchor">
      <div class="flex space-x-2 items-center">
        <slot name="title"></slot>

        <Icon name="ep:arrow-down-bold" class="text-secondary" />
      </div>
      <div
        v-if="isOpen"
        class="menu flex shadow-md flex-col z-10 top-5 right-7 px-0 absolute bg-white text-left"
        :class="['py-3', itemClass]"
      >
        <slot name="top-extra"></slot>

        <div
          class="menu-item font-medium"
          v-for="option in dropdownOptions"
          :key="option.name"
        >
          <NuxtLink :to="option.to">
            {{ option.name }}
          </NuxtLink>
        </div>
        <slot name="b-extra"></slot>
      </div>
    </button>
  </div>
</template>

<script setup>
const { isOpen, dropdownOptions, itemClass } = defineProps({
  isOpen: {
    type: Boolean,
  },
  dropdownOptions: {
    type: Array,
  },
  itemClass: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["toggle"]);
function toggle() {
  emit("toggle");
}
</script>

<style scoped>
.menu {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  cursor: pointer;
  list-style: none;
}

.menu-item {
  color: #212529;
  padding: 0.25rem 1.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.menu-item:hover {
  background-color: #f4f6f6;
  cursor: pointer;
}

span {
  font-weight: bold;
  font-size: 1rem;
}
</style>
