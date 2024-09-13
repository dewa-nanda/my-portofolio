<template>
  <div class="flex gap-2 text-[#ADAEC0] w-full">
    <Icon :name="props.icon" class="text-2xl mt-1" style="color: #adaec0" />
    <div>
      <h2 class="font-extrabold -mb-2">{{ props.title }}</h2>
      <p>{{ props.detail }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    detail: string
    icon: string
  }

  const props = defineProps<Props>()
</script>
