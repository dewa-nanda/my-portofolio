<template>
  <div
    class="flex flex-col justify-center items-center bg-[#483E46] rounded-2xl h-fit py-6"
  >
    <div class="w-full">
      <figure
        class="hidden lg:block bg-[#7E7A88] pt-4 w-fit mx-auto"
        style="border-radius: 35px"
      >
        <img
          src="../assets/images/profile.png"
          width="165px"
          class="mx-auto"
          style="
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
          "
        />
      </figure>
      <h1
        class="text-[#C7CD83] leading-12 font-bold text-4xl lg:text-2xl lg:leading-6 text-center py-2"
      >
        Dewa <br />
        Putra Hernanda
      </h1>
      <p
        class="text-center bg-[#ADAEC0] text-[#31282D] w-fit px-8 text-xl lg:text-lg rounded-xl mx-auto font-bold"
      >
        Programmer
      </p>
    </div>

    <div class="border-t-2 w-10/12 my-2"></div>

    <div class="w-full px-4">
      <Contac
        v-for="contact in listContact"
        :title="contact.title"
        :detail="contact.detail"
        :icon="contact.icon"
      />
    </div>

    <div class="border-t-2 w-10/12 my-2"></div>

    <div class="flex gap-2">
      <NuxtLink to="https://www.linkedin.com/in/dewa-putra-h/" target="_blank">
        <Icon
          name="ci:linkedin"
          class="text-4xl mt-1 text-[#adaec0] hover:text-[#2b3137]"
        />
      </NuxtLink>
      <NuxtLink to="https://github.com/dewa-nanda" target="_blank">
        <Icon
          name="tabler:brand-github"
          class="text-4xl mt-1 font-bold text-[#adaec0] hover:text-[#2b3137]"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface contact {
    title: string
    detail: string
    icon: string
  }

  const listContact: contact[] = [
    {
      title: 'Email',
      detail: 'dewananda124@gmail.com',
      icon: 'material-symbols:mail-outline-rounded',
    },
    {
      title: 'Phone',
      detail: '081326805627',
      icon: 'material-symbols:call-outline-rounded',
    },
    {
      title: 'Birthday',
      detail: 'Feb 24. 2002',
      icon: 'uil:calender',
    },
    {
      title: 'Location',
      detail: 'Sleman, Yogyakarta, Indonesia',
      icon: 'streamline:travel-map-navigation-map-maps-gps',
    },
  ]
</script>

<style scoped>
  h1,
  h2 {
    font-family: 'Nerko One', cursive;
  }
</style>
