<template>
  <section class="mx-6 mb-3">
    <h1 class="text-3xl mb-3 font-bold text-[#C7CD83]">Project</h1>
    <div class="flex gap-2 text-[#ADAEC0] my-3">
      <p class="hover:text-[#C7CD83]">All</p>
      <p class="hover:text-[#C7CD83]">React</p>
      <p class="hover:text-[#C7CD83]">Vue</p>
    </div>

    <div class="w-full grid grid-cols-6 gap-2">
      <figure
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      >
        <a href="#">
          <img
            class="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />
        </a>
        <figcaption
          class="absolute text-lg text-center w-full text-white bottom-3"
        >
          <p>
            <span
              class="bg-[#67646fde] text-[#e7e6e6] text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg"
              >Default</span
            >
          </p>
        </figcaption>
      </figure>
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
