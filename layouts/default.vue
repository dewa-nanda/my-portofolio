<template>
  <div
    class="flex flex-col lg:flex-row justify-center gap-10 py-5 w-10/12 xl:w-10/12 mx-auto"
  >
    <CardProfile />

    <div class="basis-full bg-[#483E46] rounded-2xl pb-4">
      <header class="w-full flex justify-end rounded-2xl">
        <nav
          class="w-full md:w-fit flex justify-center md:justify-end text-lg text-[#483E46] bg-[#7E7A88] p-4 px-12 gap-7 font-bold rounded-2xl mb-4"
        >
          <NuxtLink
            v-for="link in listLink"
            class="hover:text-[#31282D]"
            :to="link.href"
            >{{ link.text }}</NuxtLink
          >
        </nav>
      </header>

      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface link {
    text: string
    href: string
  }

  const listLink: link[] = [
    {
      text: 'About',
      href: '/',
    },
    {
      text: 'Project',
      href: '/project',
    },
    {
      text: 'Resume',
      href: '/resume',
    },
  ]
</script>

<style scoped>
  .router-link-active {
    color: #31282d;
  }
</style>
