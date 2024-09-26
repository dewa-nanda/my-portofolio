export interface SkillIcon {
  iconName: string
  title: string
}

export interface Skill {
  title: string
  dsec: string
}

export interface DetailProject {
  img: string[]
  title: string
  detailDesc: {
    value: string
    title: string
    content: any[]
  }[]
  github: string
  web: string
}
