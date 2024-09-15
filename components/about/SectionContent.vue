<template>
  <section>
    <h1 class="text-3xl mb-3 font-bold text-[#C7CD83]">{{ props.title }}</h1>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps(['title'])
</script>
