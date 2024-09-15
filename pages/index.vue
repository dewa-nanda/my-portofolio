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
    <div class="flex justify-center flex-wrap gap-4">
      <CardSkill
        v-for="skill in skillList"
        :img-src="skill.imgSrc"
        :title="skill.title"
        :desc="skill.dsec"
      />
    </div>
  </SectionContent>

  <SectionContent class="mx-6 mb-3" title="Skills"> </SectionContent>
</template>

<script lang="ts" setup>
  import webDevImg from '@/assets/images/WebDeveloper.png'
  import webDesignImg from '@/assets/images/WebDesign.png'

  useSeoMeta({
    title: 'KETweb - About',
  })

  interface Skill {
    imgSrc: any
    title: string
    dsec: string
  }

  const skillList: Skill[] = [
    {
      imgSrc: webDevImg,
      title: 'Web Developer',
      dsec: 'Focusing on both front-end development to build high-performing and user-friendly websites.',
    },
    {
      imgSrc: webDesignImg,
      title: 'Web Design',
      dsec: 'Creating digital experiences that are both beautiful and functional.',
    },
  ]
</script>

<style scoped>
  #about-me {
    font-family: 'Open Sans', sans-serif;
  }
</style>
