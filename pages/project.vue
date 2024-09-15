<template>
  <section class="mx-6 mb-3">
    <h1 class="text-3xl mb-3 font-bold text-[#C7CD83]">Project</h1>
    <div class="flex gap-2 text-[#ADAEC0] my-3">
      <p class="hover:text-[#C7CD83]">All</p>
      <p class="hover:text-[#C7CD83]">React</p>
      <p class="hover:text-[#C7CD83]">Vue</p>
    </div>

    <div class="w-full grid grid-cols-4 gap-2">
      <div class="h-[100px]">
        <!-- <img src="#"> -->
        <div class="bg-[#ADAEC0] h-full rounded-3xl"></div>
        <h2 class="text-center text-[#FFFFFF] font-bold">Title</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  useSeoMeta({
    title: 'KETweb - Project',
  })
</script>

<style scoped>
  h1 {
    font-family: Nerko One, cursive;
  }
</style>
