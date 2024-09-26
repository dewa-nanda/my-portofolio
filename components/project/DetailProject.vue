<template>
  <Dialog>
    <DialogTrigger as-child>
      <figure
        class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      >
        <a>
          <img
            class="rounded-lg h-full w-full"
            :src="data.img[0]"
            :alt="`project ${data.title}`"
          />
        </a>
        <figcaption
          class="absolute text-lg text-center w-full text-white bottom-3"
        >
          <p>
            <span
              class="bg-[#67646fde] text-[#e7e6e6] text-md lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg"
              >{{ data.title }}</span
            >
          </p>
        </figcaption>
      </figure>
    </DialogTrigger>

    <DialogContent class="w-11/12 lg:w-1/2">
      <DialogHeader>
        <DialogTitle>{{ data.title }}</DialogTitle>
      </DialogHeader>

      <div class="w-full flex flex-col gap-3">
        <div class="flex flex-col">
          <Carousel
            v-slot="{ canScrollNext }"
            class="relative w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              <CarouselItem v-for="(imgSrc, i) in data.img" :key="i">
                <div class="h-full w-full">
                  <img :src="imgSrc" class="h-full w-full rounded-lg" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext v-if="canScrollNext" />
          </Carousel>
          <p class="text-center mt-1 text-gray-600">Project Highlight</p>
        </div>

        <Accordion
          type="single"
          class="w-full"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="(item, i) in data.detailDesc"
            :key="i"
            :value="item.value"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              <p v-if="item.title === 'Description'">{{ item.content[0] }}</p>
              <ul v-else-if="item.title === 'Features'" class="list-disc">
                <li
                  v-for="(data, i) in item.content"
                  :key="i"
                  class="flex items-center gap-2"
                >
                  <Icon name="tabler:point" />
                  {{ data }}
                </li>
              </ul>
              <div
                v-else-if="item.title === 'Tech Stack'"
                class="flex justify-center gap-2"
              >
                <div
                  v-for="(v, i) in item.content"
                  :key="i"
                  class="flex flex-col items-center text-center gap-2 font-semibold"
                >
                  <Icon :name="v.icon" class="text-5xl" />
                  <p>{{ v.title }}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <DialogFooter>
        <div class="flex gap-3">
          <NuxtLink :to="data.github" target="blank">
            <Icon
              name="f7:logo-github"
              class="text-3xl text-slate-600 hover:text-slate-700"
            />
          </NuxtLink>
          <NuxtLink :to="data.web" target="blank">
            <Icon
              name="streamline:web-solid"
              class="text-3xl text-slate-600 hover:text-slate-700"
            />
          </NuxtLink>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'

  import { ref } from 'vue'
  import { watchOnce } from '@vueuse/core'
  import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/components/ui/carousel'
  import { Card, CardContent } from '@/components/ui/card'

  const emblaMainApi = ref<CarouselApi>()
  const emblaThumbnailApi = ref<CarouselApi>()
  const selectedIndex = ref(0)

  function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
  }

  watchOnce(emblaMainApi, emblaMainApi => {
    if (!emblaMainApi) return

    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  })

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion'

  import type { DetailProject } from '~/types'

  defineProps<{ data: DetailProject }>()

  const defaultValue = 'item-1'
</script>
