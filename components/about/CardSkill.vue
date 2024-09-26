<template>
  <div
    class="bg-[#7E7A88] w-full min-h-[140px] p-2 py-8 px-6 flex gap-2 rounded-2xl"
  >
    <div class="text-[#2b3137] flex flex-col justify-center gap-1">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <p class="leading-5 text-wrap">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    imgSrc: string
    title: string
    desc: string
  }

  const props = defineProps<Props>()
</script>
