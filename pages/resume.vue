<template>
  <section class="mx-6 mb-3">
    <div class="flex gap-2 text-[#C7CD83]">
      <h1 class="text-3xl mb-3 font-bold">Resume</h1>
      <NuxtLink
        to="https://drive.google.com/file/d/1A9mZ-R4GAVkOHtIPoKabKgAw045aExFZ/view?usp=sharing"
        target="_blank"
      >
        <Icon
          name="flowbite:arrow-down-to-bracket-solid"
          class="text-3xl mt-1 hover:text-[#adaec0]"
        />
      </NuxtLink>
    </div>

    <div>
      <div class="flex items-center gap-2 text-3xl text-[#adaec0]">
        <Icon name="flowbite:book-outline" />
        <h2 class="font-bold">Education</h2>
      </div>
      <div>
        <div class="text-[#adaec0] flex mx-2 gap-3">
          <Icon
            name="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right"
            class="text-[2.4rem]"
          />
          <div>
            <h3 class="text-xl font-bold -mb-1">S1 Informatika</h3>
            <p class="font-semibold">2020 - 2024</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ex totam, dolores possimus dolor veniam! Dicta culpa
              rem soluta doloremque quisquam, minima nihil tenetur accusantium
              quibusdam unde velit voluptatem ipsum expedita ab corrupti nemo
              aliquid aspernatur nesciunt hic inventore ea?
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center gap-2 text-3xl text-[#adaec0]">
        <Icon name="solar:programming-broken" />
        <h2 class="font-bold">Experiance</h2>
      </div>
      <div>
        <div class="text-[#adaec0] flex mx-2 gap-3">
          <Icon
            name="streamline:interface-arrows-right-circle-2-arrow-keyboard-circle-button-right"
            class="text-[2.4rem]"
          />
          <div>
            <h3 class="text-xl font-bold -mb-1">Lazismu - Web Developer</h3>
            <p class="font-semibold">2020 - 2024</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ex totam, dolores possimus dolor veniam! Dicta culpa
              rem soluta doloremque quisquam, minima nihil tenetur accusantium
              quibusdam unde velit voluptatem ipsum expedita ab corrupti nemo
              aliquid aspernatur nesciunt hic inventore ea?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  useSeoMeta({
    title: 'KETweb - Resume',
  })
</script>
