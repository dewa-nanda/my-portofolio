<template>
  <section class="mx-6 mb-3">
    <div class="border-b-2 mb-4">
      <h1 class="text-3xl mb-3 font-bold text-[#C7CD83]">Project</h1>
    </div>

    <div
      class="w-full grid lg:grid-cols-2 xl:grid-cols-4 justify-items-center gap-4"
    >
      <DetailProject
        v-for="(project, i) in detailProjects"
        :data="project"
        :key="i"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { detailProjects } from '~/assets/data/home'

  useSeoMeta({
    title: 'KETweb - Project',
  })
</script>

<style scoped>
  h1 {
    font-family: Nerko One, cursive;
  }
</style>
