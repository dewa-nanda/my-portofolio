<template>
  <div
    class="hidden lg:flex flex-col justify-center items-center bg-[#483E46] rounded-2xl basis-1/3 h-[560px]"
  >
    <div class="w-full">
      <figure
        class="bg-[#7E7A88] pt-4 w-fit mx-auto"
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
      <div class="text-[#C7CD83] font-bold text-2xl text-center mb-1">
        <h1 class="-mb-2">Dewa</h1>
        <h2>Putra Hernanda</h2>
      </div>
      <p class="text-center bg-[#ADAEC0] w-fit px-3 rounded-xl mx-auto">
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

    <div class="flex gap-2">
      <NuxtLink to="https://www.linkedin.com/in/dewa-putra-h/" target="_blank">
        <Icon name="ci:linkedin" class="text-3xl mt-1" style="color: #adaec0" />
      </NuxtLink>
      <NuxtLink to="https://github.com/dewa-nanda" target="_blank">
        <Icon
          name="tabler:brand-github"
          class="text-3xl mt-1 font-bold"
          style="color: #adaec0"
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
