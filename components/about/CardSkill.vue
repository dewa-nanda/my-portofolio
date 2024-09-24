<template>
  <div
    class="bg-[#7E7A88] max-w-[650px] min-h-[140px] p-2 py-3 px-6 flex gap-2 rounded-2xl"
  >
    <slot></slot>
    <img :src="imgSrc" class="h-3/5 my-auto hidden md:block" />
    <div class="text-[#2b3137] flex flex-col justify-center max-w-[380px]">
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
