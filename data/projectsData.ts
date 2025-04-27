interface Project {
  title: string
  description: string
  slug: string
  imgSrc?: string
  href?: string
  appStoreLink?: string
  privacyPolicy?: string
  contactEmail?: string
  detailedDescription?: string
  screenshots?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Diarimoji',
    description: 'Your day in emojis',
    slug: 'diarimoji',
    imgSrc: '/static/images/projects/diarimoji/app_icon_with_background.png',
    // appStoreLink: 'https://apps.apple.com/app/id123456789',
    privacyPolicy: `
      Diarimoji does not ask for an account or collect personal data.
      All diary entries are stored locally on your device.
      The app contains no ads, no analytics SDKs, and no third-party tracking.
      When you choose to share an emoji entry, only the selected emoji and optional caption are transmitted to Apple's share sheet; nothing is sent to our servers.
      For questions or data-deletion requests, contact jepark044@gmail.com.
    `,
    contactEmail: 'jepark044@gmail.com',
    detailedDescription: `
    Diarimoji — Your day in emojis
    Capture your entire day with a single emoji. Diarimoji is the delightfully simple micro-journal that lets you record feelings, thoughts and daily highlights using nothing but expressive symbols.
    • Emoji-Only Entries - Tap once to pick the perfect emoji and log your mood, energy or achievement.
    • AI Text-to-Emoji - Prefer typing? Our AI instantly converts short sentences into a matching emojis!
    • Daily Streaks & Stats - Watch your emotional pattern unfold on a calendar.
    • Private or Social - Keep entries just for you or share today's emoji with friends!
    • No Accounts, No Ads - Open, emoji, done. Your data stays on your device unless you choose to share.
    Trade paragraphs for pictures. Open Diarimoji tonight and try telling your story with a single icon—you'll be surprised how much one little face can say.
    `,
    screenshots: [
      '/static/images/projects/diarimoji/00.png',
      '/static/images/projects/diarimoji/01.png',
      '/static/images/projects/diarimoji/02.png',
    ],
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
