import type { Skill, SkillIcon, DetailProject } from '~/types'
import ketRestoImg1 from '~/public/ketresto1.png'
import ketRestoImg2 from '~/public/ketresto2.png'
import ticTacToe1 from '~/public/tictactoe1.png'
import ticTacToe2 from '~/public/tictactoe1.png'
import notesAppReact1 from '~/public/tictactoe1.png'
import notesAppReact2 from '~/public/tictactoe1.png'

export const skillList: Skill[] = [
  {
    title: 'Web Developer',
    dsec: 'Focusing on both front-end development to build high-performing and user-friendly websites.',
  },
  {
    title: 'Web Design',
    dsec: 'Creating digital experiences that are both beautiful and functional.',
  },
  {
    title: 'Lifetime Learner',
    dsec: 'I’m constantly exploring new challenges and expanding my knowledge, especially in technology and programming. I believe that growth comes from curiosity and dedication, which drives me to stay updated with the latest trends and continuously refine my skills.',
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

export const detailProjects: DetailProject[] = [
  {
    img: [ketRestoImg2, ketRestoImg1],
    title: 'Restaruants App',
    detailDesc: [
      {
        value: 'item-1',
        title: 'Description',
        content: [
          'Restaurant Apps is a web application designed to help users discover restaurants. It offers a user-friendly interface with features like restaurant listing, search functionality, and detailed restaurant views. The app is fully responsive, making it accessible on both mobile and desktop devices.',
        ],
      },
      {
        value: 'item-2',
        title: 'Features',
        content: [
          'Restaurant listings with descriptions',
          'Search bar for easy restaurant discovery',
          'Detailed restaurant view with ratings and reviews',
          'Responsive design',
        ],
      },
      {
        value: 'item-3',
        title: 'Tech Stack',
        content: [
          {
            icon: 'skill-icons:html',
            title: 'HTML',
          },
          {
            icon: 'skill-icons:css',
            title: 'CSS',
          },
          {
            icon: 'skill-icons:javascript',
            title: 'JavaScript',
          },
          {
            icon: 'vscode-icons:file-type-sass',
            title: 'SASS',
          },
          {
            icon: 'logos:webpack',
            title: 'Webpack',
          },
        ],
      },
    ],
    github: 'https://github.com/dewa-nanda/Restaurant-apps',
    web: 'ket-restaurant.netlify.app',
  },
  {
    img: [ticTacToe1, ticTacToe2],
    title: 'Memos App',
    detailDesc: [
      {
        value: 'item-1',
        title: 'Description',
        content: [
          'A simple Tic-Tac-Toe game built using React, showcasing the use of components, props, and state management. It allows two players to compete on a 3x3 grid, displaying game status and providing a reset functionality to start over.',
        ],
      },
      {
        value: 'item-2',
        title: 'Features',
        content: [
          'Interactive Tic-Tac-Toe board',
          'Two-player functionality',
          'Turn-based game system',
          'Display game status (turn/winner)',
          'Reset game option',
        ],
      },
      {
        value: 'item-3',
        title: 'Tech Stack',
        content: [
          {
            icon: 'skill-icons:react-dark',
            title: 'React',
          },
          {
            icon: 'skill-icons:tailwindcss-dark',
            title: 'Tailwind',
          },
          {
            icon: 'logos:vitejs',
            title: 'Vite',
          },
          {
            icon: 'skill-icons:netlify-dark',
            title: 'Netlify',
          },
        ],
      },
    ],
    github: 'https://github.com/dewa-nanda/tic-tac-toe',
    web: 'https://tic-tac-toe-ketapp.netlify.app/',
  },
  {
    img: [notesAppReact1, notesAppReact2],
    title: 'Note App',
    detailDesc: [
      {
        value: 'item-1',
        title: 'Description',
        content: [
          'Notes App React is a simple and intuitive note-taking web application. It allows users to create, edit, and organize their notes efficiently. The app is designed to be lightweight and user-friendly, making it perfect for personal use or managing day-to-day tasks.',
        ],
      },
      {
        value: 'item-2',
        title: 'Features',
        content: [
          'Add New Notes: Users can create new notes and add them to the list.',
          'Delete Notes: Users can remove notes they no longer need.',
          'Search Notes: Easily search for notes by typing keywords in the search bar.',
          'Archive Notes: Users can archive important notes for future reference.',
        ],
      },
      {
        value: 'item-3',
        title: 'Tech Stack',
        content: [
          {
            icon: 'skill-icons:react-dark',
            title: 'React',
          },
          {
            icon: 'skill-icons:css',
            title: 'CSS',
          },
          {
            icon: 'skill-icons:netlify-dark',
            title: 'Netlify',
          },
        ],
      },
    ],
    github: 'https://github.com/dewa-nanda/note-app-react',
    web: 'https://ket-notes-app.netlify.app/',
  },
]
