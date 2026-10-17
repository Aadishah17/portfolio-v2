export const myProjects = [
  {
    id: 1,
    title: "CUDADL",
    description:
      "A C++17/CUDA tensor framework with a stream-ordered memory pool and mixed-precision Tensor Core matrix multiplication.",
    subDescription: [
      "A cudaMallocAsync memory pool measured 253× lower allocation latency than raw cudaMalloc/cudaFree for a 64 MB buffer over 1,000 iterations.",
      "The FP16/BF16 Tensor Core GEMM reached 97% of cuBLAS throughput at 512×512; results vary by matrix size.",
      "The framework supports FP32, FP16 and BF16, with fused Bias+ReLU/GELU kernels measured up to 1.6× faster than separate operations.",
      "Automatic differentiation is still in progress.",
    ],
    github: "https://github.com/Aadishah17/cuda",
    live: "",
    tags: [
      {
        id: 1,
        name: "Modern C++17",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "CUDA 13.x",
        path: "",
      },
      {
        id: 3,
        name: "cuBLAS",
        path: "",
      },
      {
        id: 4,
        name: "CMake",
        path: "",
      },
      {
        id: 5,
        name: "Tensor Cores",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "CloudPrint",
    description:
      "A .NET 10 print-management platform with a REST API, PostgreSQL job store, background worker and optional Azure Service Bus.",
    subDescription: [
      "PostgreSQL polling recovers jobs when publishing fails; Azure Service Bus is an optional messaging path.",
      "Workers claim jobs with expiring leases, retry transient failures with backoff, and pass an idempotency key to the printer simulator so completed jobs are not repeated after redelivery.",
      "The dashboard shows printer and job status and includes failure injection and concurrent batch dispatch for local testing.",
    ],
    github: "https://github.com/Aadishah17/CloudPrint",
    live: "",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".NET 10",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "",
      },
      {
        id: 4,
        name: "Azure Service Bus",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "",
      },
    ],
  },
  {
    id: 3,
    title: "CollabLearn",
    description:
      "A MERN learning platform with Gemini-powered course recommendations.",
    subDescription: [
      "Added a course recommendation flow using the Gemini API.",
      "Targeted MongoDB indexes cut Gemini API response latency by 30%.",
      "Used Google OAuth2 for sign-in and Redux for client-side state.",
    ],
    github: "https://github.com/Aadishah17/CollabLearn",
    live: "https://collab-learn-xi.vercel.app",
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
  {
    id: 4,
    title: "GoldenHour",
    description:
      "An Android emergency-response prototype with victim-triage prompts and a simulated hospital dashboard.",
    subDescription: [
      "Collects a location, walks a bystander through a basic victim assessment, and offers one-tap calls to 108/112.",
      "Built with MVVM, Hilt and Coroutines/Flow; the hospital dashboard simulates ambulance telemetry.",
    ],
    github: "https://github.com/Aadishah17/golden-hour",
    live: "",
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
        name: "Hilt DI",
        path: "",
      },
      {
        id: 5,
        name: "Coroutines/Flow",
        path: "",
      },
    ],
  },
  {
    id: 5,
    title: "Kompass",
    description:
      "An offline iOS navigation prototype with GPS tracking and a local route and ETA calculator.",
    subDescription: [
      "Uses CoreLocation for GPS and MapKit for maps without network requests.",
      "Route estimates use a direct-line Haversine calculation; they do not follow road routes.",
    ],
    github: "https://github.com/Aadishah17/kompass",
    live: "",
    tags: [
      {
        id: 1,
        name: "Swift",
        path: "",
      },
      {
        id: 2,
        name: "SwiftUI",
        path: "",
      },
      {
        id: 3,
        name: "MapKit",
        path: "",
      },
      {
        id: 4,
        name: "CoreLocation",
        path: "",
      },
      {
        id: 5,
        name: "Haversine Routing",
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
    href: "https://linkedin.com/in/aadi-shah-6535672a6",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Aadi__17",
    icon: "/assets/socials/leetcode.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919819427909",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "Software Engineering Intern",
    job: "ZM Lifestyle (Hybrid, Mumbai)",
    date: "May 2025 – June 2025",
    contents: [
      "Designed, implemented, and shipped React.js features for the core product dashboard within a five-engineer Agile team.",
      "Diagnosed and resolved 10+ defects in the legacy codebase, improving application stability by 15% and reducing incoming error reports.",
      "Collaborated cross-functionally through daily standups and peer code review as part of an established production engineering process.",
    ],
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    job: "Parul University · Vadodara, Gujarat",
    date: "2023 – Expected May 2027",
    contents: [
      "B.Tech in Computer Science & Engineering; expected graduation May 2027.",
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
