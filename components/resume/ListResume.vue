<template>
  <div class="w-full mb-4">
    <div class="flex items-center gap-2 text-3xl text-[#adaec0] mb-1.5">
      <Icon :name="icon" />
      <h2 class="font-bold">{{ title }}</h2>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Resume {
    title: string
    icon: string
  }
  const props = defineProps<Resume>()
</script>
