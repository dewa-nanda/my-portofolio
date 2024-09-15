<template>
  <section class="mx-6 mb-3">
    <div class="flex gap-2 text-[#C7CD83]">
      <h1 class="text-3xl mb-3 font-bold">Resume</h1>
      <NuxtLink
        to="https://drive.google.com/file/d/1A9mZ-R4GAVkOHtIPoKabKgAw045aExFZ/view?usp=sharing"
        target="_blank"
      >
        <Icon
          name="flowbite:arrow-down-to-bracket-solid"
          class="text-3xl mt-1 hover:text-[#adaec0]"
        />
      </NuxtLink>
    </div>

    <ListResume :title="education.title" :icon="education.icon">
      <ItemResume v-for="detail in education.listResume">
        <h3 class="text-xl font-bold -mb-1">{{ detail.title }}</h3>
        <p class="font-semibold">{{ detail.years }}</p>
        <ul>
          <li v-for="point in detail.desc" class="list-disc mx-4">
            {{ point }}
          </li>
        </ul>
      </ItemResume>
    </ListResume>

    <ListResume :title="experiance.title" :icon="experiance.icon">
      <ItemResume v-for="detail in experiance.listResume">
        <h3 class="text-xl font-bold -mb-1">{{ detail.title }}</h3>
        <p class="font-semibold">{{ detail.years }}</p>
        <ul>
          <li v-for="point in detail.desc" class="list-disc mx-4">
            {{ point }}
          </li>
        </ul>
      </ItemResume>
    </ListResume>
  </section>
</template>

<script lang="ts" setup>
  interface Resume {
    title: string
    icon: string
    listResume: { title: string; years: string; desc: string[] }[]
  }

  useSeoMeta({
    title: 'KETweb - Resume',
  })

  const education: Resume = {
    title: 'Education',
    icon: 'flowbite:book-outline',
    listResume: [
      {
        title: 'S1 Informatics',
        years: '2020 - 2024',
        desc: [
          'Thesis on "SPK Deteksi Penyakit Tanaman Cabai Menggunakan CBR & CF”.',
          'Lab assistant “Dasar - Dasar Pemrograman” & “Algoritma Pemrograman”',
        ],
      },
    ],
  }

  const experiance: Resume = {
    title: 'Experiance',
    icon: 'solar:programming-broken',
    listResume: [
      {
        title: 'Front-end web vue developer',
        years: 'Aug 2024 - Present',
        desc: [],
      },
      {
        title: 'Front-end web & Back-end, Project Lazismu',
        years: 'Sept 2023- Dec 2023',
        desc: [
          'Communicate and implement as the client wants.',
          'Work and communicate well as a team.',
          'Lead the team to make decisions.',
          'Design the UI/UX as the client wants.',
          'Develop the front-end web and back-end using Laravel according to the design.',
        ],
      },
      {
        title: 'Junior Web Developer - Digitalent',
        years: 'Aug 2023',
        desc: [
          'Write code following guidelines and best practices',
          'Structured Programming Skills',
          'Utilization of Libraries and External Components',
        ],
      },
      {
        title: 'Machine Learning Developer, Bangkit Academy',
        years: 'Feb 2023 - Jul 2023',
        desc: [
          'Work and communicate well as a team',
          'Looking a suitable dataset for the project',
          'Cleaning the dataset from Kaggle before developing on machine learning models using python and excel',
          'Develop machine learning recommendation system using Python sklearn',
          'Create the API using flask',
        ],
      },
      {
        title: 'Front-end Web & Back-end, Dicoding Academy',
        years: 'Aug 2020 - Dec 2022',
        desc: [
          'Work and communicate well as a team',
          'Lead the team to make decisions',
          'Develop front-end web using react',
        ],
      },
    ],
  }
</script>
