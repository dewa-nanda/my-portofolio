import type { Skill, SkillIcon } from '~/types'

import webDevImg from '@/assets/images/WebDeveloper.png'
import webDesignImg from '@/assets/images/WebDesign.png'

export const skillList: Skill[] = [
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

export const skillIcons: SkillIcon[] = [
  {
    iconName: 'mdi:vuejs',
    title: 'vue',
  },
  {
    iconName: 'simple-icons:nuxtdotjs',
    title: 'nuxt',
  },
  {
    iconName: 'simple-icons:react',
    title: 'react',
  },
  {
    iconName: 'tabler:brand-nextjs',
    title: 'next',
  },
  {
    iconName: 'mdi:tailwind',
    title: 'tailwind',
  },
]
