<template>
  <div
    class="flex flex-col justify-center items-center bg-[#483E46] rounded-2xl basis-1/3 h-[560px]"
  >
    <div class="">
      <figure
        class="bg-[#7E7A88] pt-4"
        style="
          border-top-right-radius: 60px;
          border-top-left-radius: 120px;
          border-bottom-left-radius: 46px;
          border-bottom-right-radius: 80px;
        "
      >
        <img
          src="../assets/images/profile.png"
          width="165px"
          class="mx-auto"
          style="
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 59px;
          "
        />
      </figure>
      <h1 class="text-[#C7CD83] font-bold text-2xl text-center">
        Dewa <br /><span>Putra Hernanda</span>
      </h1>
      <p class="text-center bg-[#ADAEC0] w-fit px-3 rounded-xl mx-auto">
        Programmer
      </p>
    </div>
    <div class="border-t-2 w-10/12 my-2"></div>
    <div class="w-full px-4">
      <Contac
        title="Email"
        detail="dewananda124@gmail.com"
        icon="material-symbols:mail-outline-rounded"
      />
      <Contac
        title="Phone"
        detail="081326805627"
        icon="material-symbols:call-outline-rounded"
      />
      <Contac title="Birthday" detail="Feb 24. 2002" icon="uil:calender" />
      <Contac
        title="Location"
        detail="Sleman, Yogyakarta, Indonesia"
        icon="streamline:travel-map-navigation-map-maps-gps"
      />
    </div>
    <div class="flex gap-2">
      <Icon name="ci:linkedin" class="text-3xl mt-1" style="color: #adaec0" />
      <Icon
        name="tabler:brand-github"
        class="text-3xl mt-1 font-bold"
        style="color: #adaec0"
      />
    </div>
  </div>
</template>
