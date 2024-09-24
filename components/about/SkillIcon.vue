<template>
  <div
    class="w-fit flex flex-col items-center justify-center gap-2"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <Icon :name="iconName" :class="`text-7xl font-bold ${colorThame}`" />
    <p :class="`text-center text-xl -mt-2 font-bold ${colorThame}`">
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { SkillIcon } from '~/types'

  defineProps<SkillIcon>()
  const colorThame = ref('text-[#928e9d]')

  const handleMouseOver = () => {
    colorThame.value = 'text-[#b8b7c2]'
  }

  const handleMouseLeave = () => {
    colorThame.value = 'text-[#928e9d]'
  }
</script>
