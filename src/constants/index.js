export const myProjects = [
  {
    id: 1,
    title: "Echo Music",
    description:
      "An open-source Android YouTube Music client that has grown to 1,000,000+ downloads and 2,100+ GitHub stars.",
    subDescription: [
      "Co-founded and actively contribute to an open-source Android YouTube Music client, providing a premium, ad-free listening experience.",
      "Architected the app using MVVM + Repository pattern with Hilt dependency injection and Jetpack Compose to keep the codebase clean, modular, and easy for community contributors to join.",
      "Shipped crucial features including a sleep timer, advanced audio quality controls, and Hindi localization through open pull requests reviewed by the community.",
    ],
    github: "https://github.com/EchoMusicApp/Echo-Music",
    live: "https://github.com/EchoMusicApp/Echo-Music/releases",
    logo: "",
    image: "/assets/projects/echo_music_mockup.webp",
    layout: "portrait",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "",
      },
      {
        id: 2,
        name: "Jetpack Compose",
        path: "",
      },
      {
        id: 3,
        name: "MVVM",
        path: "",
      },
      {
        id: 4,
        name: "Hilt",
        path: "",
      },
      {
        id: 5,
        name: "REST API",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "GoldenHour",
    description:
      "An emergency response Android application that guides bystanders through post-accident response and triage.",
    subDescription: [
      "Developed an Android app that guides a bystander through road accident emergency steps: GPS location detection, triage checks, one-tap emergency calling (108/112), and legal guides on India's Good Samaritan Law.",
      "Designed and simulated a hospital-side trauma dashboard displaying live ambulance coordinates, real-time trauma team readiness, and AI-powered accident severity triage.",
      "Engineered the application utilizing MVVM + Repository clean architecture, Hilt dependency injection, and Kotlin Coroutines/Flow.",
    ],
    github: "https://github.com/Aadishah17/GoldenHour",
    live: "",
    logo: "",
    image: "/assets/projects/goldenhour_mockup.webp",
    layout: "landscape",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "",
      },
      {
        id: 2,
        name: "Jetpack Compose",
        path: "",
      },
      {
        id: 3,
        name: "MVVM",
        path: "",
      },
      {
        id: 4,
        name: "Coroutines & Flow",
        path: "",
      },
      {
        id: 5,
        name: "Hilt",
        path: "",
      },
    ],
  },
  {
    id: 3,
    title: "CollabLearn",
    description:
      "A full-stack skill-learning web platform offering AI-powered course recommendations.",
    subDescription: [
      "Built and deployed a full-stack skill-learning platform featuring AI course recommendations using the Gemini API and Google AI Studio.",
      "Optimized MongoDB indexing to cut Gemini API response latencies by 30%, noticeably enhancing user interface speed and application feel.",
      "Integrated secure Google OAuth2 authentication and utilized Redux for centralized client-side state management.",
    ],
    github: "https://github.com/Aadishah17/CollabLearn",
    live: "https://collablearn.vercel.app",
    logo: "",
    image: "/assets/projects/collablearn_mockup.webp",
    layout: "landscape",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "",
      },
      {
        id: 4,
        name: "Gemini API",
        path: "",
      },
      {
        id: 5,
        name: "Redux",
        path: "",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Aadishah17",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aadi-shah-6535672a6",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919819427909",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "B.Tech CSE Student",
    job: "Parul University",
    date: "2023 - Present",
    contents: [
      "Pursuing a Bachelor of Technology in Computer Science & Engineering (GPA maintained).",
      "Active member of the Swift Coding Club, collaborating on mobile development projects and workshops.",
      "Solved 300+ algorithmic problems on LeetCode focusing on Arrays, Trees, Graphs, and Dynamic Programming.",
    ],
  },
  {
    title: "Co-Founder & Contributor",
    job: "Echo Music (Open Source)",
    date: "2023 - Present",
    contents: [
      "Co-founded and actively contribute to an open-source Android YouTube Music client with over 1,000,000 downloads and 2,100+ GitHub stars.",
      "Designed clean architecture using MVVM, Hilt, and Jetpack Compose to ensure high modularity and seamless onboarding for new community contributors.",
      "Successfully shipped user-requested features including a sleep timer, high-fidelity audio quality controls, and Hindi localization through community-reviewed pull requests.",
    ],
  },
  {
    title: "Software Engineering Intern",
    job: "ZM Lifestyle",
    date: "May 2024 - Jul 2024",
    contents: [
      "Collaborated within a 5-person engineering team to build and ship core React.js features for the main product dashboard on regular release cycles.",
      "Identified, debugged, and resolved over 10 critical bugs in the legacy codebase, improving overall application stability by 15% and reducing client-reported errors.",
      "Participated in daily agile stand-ups, conducted peer pull request reviews, and worked extensively with Git/GitHub workflows in a production environment.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
