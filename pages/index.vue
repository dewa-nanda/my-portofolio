<template>
  <SectionContent class="mx-6 mb-3" title="About Me" id="about-me">
    <p class="text-[#ADAEC0] text-justify leading-6">
      I'm a passionate <strong>Junior Front-End Web Developer</strong> with a
      strong foundation in <strong>JavaScript</strong>. I'm constantly seeking
      out new technologies and frameworks to expand my skill set and tackle
      complex challenges. My ability to <strong>learn quickly</strong> and
      <strong>adapt to new environments</strong> allows me to deliver
      high-quality solutions that meet the needs of my clients.
    </p>
    <ul class="text-[#ADAEC0] mt-2">
      <li>
        🔭 I’m currently working on <strong>geek garden software house.</strong>
      </li>
      <li>
        🌱 Learning more about <strong>Vue.js</strong>, and
        <strong>React</strong>
      </li>
      <li>
        💬 Ask me about <strong>Front-End Web Development</strong>,
        <strong>JavaScript</strong>, or anything <strong>tech-related</strong>.
      </li>
      <li>
        ⚡ Fun fact: I enjoy music and exploring new places when I'm not coding.
      </li>
    </ul>
  </SectionContent>

  <SectionContent class="mx-6 mb-3" title="What I’am Doing">
    <div class="grid xl:grid-cols-2 gap-4">
      <CardSkill
        v-for="(skill, i) in skillList"
        :img-src="skill.imgSrc"
        :title="skill.title"
        :desc="skill.dsec"
        :class="`${i === 2 ? 'xl:col-span-2' : ''}`"
      />
    </div>
  </SectionContent>

  <SectionContent class="mx-6 mb-3" title="Skills">
    <div class="flex flex-wrap justify-center gap-6 px-5">
      <SkillIcon
        v-for="skillIcon in skillIcons"
        :icon-name="skillIcon.iconName"
        :title="skillIcon.title"
      />
    </div>
  </SectionContent>
</template>

<script lang="ts" setup>
  import { skillList, skillIcons } from '~/assets/data/home'

  useSeoMeta({
    title: 'KETweb - About',
  })
</script>

<style scoped>
  #about-me {
    font-family: 'Open Sans', sans-serif;
  }
</style>
