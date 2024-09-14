<template>
  <div class="flex justify-center gap-10 py-5 w-10/12 xl:w-10/12 mx-auto">
    <CardProfile />

    <div class="basis-full bg-[#483E46] rounded-2xl">
      <header class="w-full flex justify-end rounded-2xl">
        <nav
          class="w-fit flex justify-end bg-[#7E7A88] p-3 gap-2 font-bold text-[#483E46] rounded-se-2xl rounded-es-2xl"
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
