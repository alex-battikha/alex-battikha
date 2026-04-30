export const profile = {
  name: "Alex Battikha",
  tagline: "I build things. Currently: strvX and surgical robots.",
  longTagline:
    "I build things. I run strvX, an AI automation company for businesses and government. We sell it two ways: custom builds through the services arm, and packaged products on the product side. After 10+ years in robotics, what I want most is to use it to change lives, so I research surgical robotics at UCSD.",
  location: "San Diego, CA",
  school: "UC San Diego",
  program: "Bioengineering",
  expectedGrad: "2029",
  headshot: "/headshot.png",
  email: "alex.battikha@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-battikha/",
  github: "https://github.com/alex-battikha",
  calendar: "https://cal.com/alex-battikha/15min",
};

export const experiences = [
  {
    company: "Katomed",
    role: "Software Engineering Intern",
    bullets: ["Incoming. Joining the team to work on medical-device software."],
    date: "Summer 2026",
    status: "incoming" as "incoming" | "current" | "past",
  },
  {
    company: "strvX",
    role: "Founder",
    bullets: [
      "AI automation for businesses and government.",
      "Services arm for custom builds, product arm for off-the-shelf systems.",
    ],
    date: "2026 → Present",
    status: "current" as "incoming" | "current" | "past",
  },
  {
    company: "ARCLab · UC San Diego",
    role: "Undergraduate Researcher · LapSurge",
    bullets: [
      "Teleoperated laparoscopic surgery on a humanoid robot.",
      "Working on tool-tip precision with ToF sensors and visual lasers.",
    ],
    date: "2025 → Present",
    status: "current" as "incoming" | "current" | "past",
  },
  {
    company: "Sanford Burnham Prebys",
    role: "Co-lead Developer · ecPATH",
    bullets: [
      "ML pipeline that spots extrachromosomal DNA from histopathology images.",
      "Currently pending Nature submission; shipping into hospitals next.",
    ],
    date: "Jun 2024 → Sep 2025",
    status: "past" as "incoming" | "current" | "past",
  },
  {
    company: "Johns Hopkins · Information Security Institute",
    role: "Research Intern · Dr. Anton Dahbura",
    bullets: [
      "Built a 5-robot testbed proving a new fail-over protocol for wireless distributed systems.",
      "Patent pending. Presented at JHU Design Day.",
    ],
    date: "Summer 2025",
    status: "past" as "incoming" | "current" | "past",
  },
  {
    company: "UCLA",
    role: "Cryptographic Researcher · Prof. Miodrag Potkonjak",
    bullets: [
      "Designed a novel PUF for hardware-fingerprint cryptography.",
      "Stress-tested it with NIST statistical suites and adversarial AI attacks.",
    ],
    date: "Summer 2024",
    status: "past" as "incoming" | "current" | "past",
  },
  {
    company: "FTC Team 11212 · The Clueless",
    role: "Captain · Mechanical Lead · Driver",
    bullets: [
      "World Champions in Houston, 1st of 7,100+ teams.",
      "Six seasons on the team, captain through the winning years. Featured in FIRST's Behind the Bot.",
    ],
    date: "2018 → 2024",
    status: "past" as "incoming" | "current" | "past",
  },
];

export const ventures = [
  {
    name: "strvX",
    role: "Founder",
    status: "Building now",
    blurb:
      "AI automation for businesses and government. Custom builds on the services side, packaged products on the product side. Customers see lower costs and more revenue.",
    href: "https://strvx.com",
  },
  {
    name: "ecPATH",
    role: "Co-lead dev · Sanford Burnham Prebys",
    status: "Pending Nature",
    blurb:
      "ML pipeline that spots extrachromosomal DNA straight from histopathology images. Shipping it into hospitals next.",
    href: undefined as string | undefined,
  },
  {
    name: "LapSurge",
    role: "Researcher · ARCLab, UCSD",
    status: "In the lab",
    blurb:
      "Teleoperated laparoscopic surgery on a humanoid robot. I work on tool-tip precision with ToF sensors and visual lasers.",
    href: "https://ucsdarclab.com",
  },
  {
    name: "Quant Research",
    role: "Independent",
    status: "Trading",
    blurb:
      "Building algos for equities and options. Signal research, backtesting, and execution, end to end.",
    href: undefined as string | undefined,
  },
  {
    name: "FTC 11212 · The Clueless",
    role: "Captain · Championship run",
    status: "World Champions",
    blurb:
      "Six seasons on the team, captain through the winning years. World Championship in Houston. Robot reliability above 99%. Watch us in Behind the Bot.",
    href: "https://www.thecluelessftc.org/our-robots/centerstage",
  },
  {
    name: "Swarm Robotics @ Johns Hopkins",
    role: "Research Intern · Dr. Dahbura",
    status: "Patent pending",
    blurb:
      "Built a 5-robot testbed that proves a new fail-over protocol for wireless distributed systems. Presented at JHU Design Day.",
    href: undefined as string | undefined,
  },
  {
    name: "Neuron",
    role: "Creator",
    status: "Shipped",
    blurb:
      "An AI co-pilot for tutors. Built because 1:1 learning shouldn't only be for families that can spend $100 an hour on it.",
    href: "https://www.neuron-ai.tech/",
  },
  {
    name: "Alex Tutoring",
    role: "Tutor",
    status: "Open for students",
    blurb:
      "Math, science, CS. I teach the way I wish I had been taught: by building things that work.",
    href: "https://alex-tutoring-landing.vercel.app/",
  },
];

export const achievements = [
  {
    title: "Jacobs Scholar",
    detail:
      "Full-ride at UCSD. Sub-1% acceptance rate, named for Qualcomm co-founder Irwin Jacobs. 9 of us in the country every year.",
    year: "2025",
  },
  {
    title: "FTC World Champion, 1st of 7,100+",
    detail:
      "Captained The Clueless (FTC 11212) to first place at Worlds in Houston. Mechanical lead, driving coach, six years on the team.",
    year: "2024",
  },
  {
    title: "U.S. Youth Delegate",
    detail:
      "1 of 9 U.S. youth delegates picked for a UN-affiliated environmental conference.",
    year: "2024",
  },
  {
    title: "San Diego's 25 Most Remarkable Teens",
    detail:
      "Named in the Robotics category by San Diego County as a Westview High senior.",
    year: "2024",
  },
  {
    title: "Patent Pending at Johns Hopkins",
    detail:
      "Co-inventor on a new robotics communication protocol with the JHU Information Security Institute.",
    year: "2025",
  },
  {
    title: "UCLA Cryptographic Research",
    detail:
      "Designed a novel PUF with Prof. Potkonjak. Broke and stress-tested it with NIST stats and adversarial AI.",
    year: "2024",
  },
];

export const projects = [
  {
    name: "Autonomous Pollution Drone",
    blurb:
      "Full-scale UAV that spots ocean trash on its own. YOLOv8 tuned to 96% precision on a 6,000+ image dataset.",
    tags: ["Computer Vision", "YOLOv8", "Robotics"],
  },
  {
    name: "Cryptographic PUF",
    blurb:
      "Hardware fingerprint that resists cloning. Validated with NIST stats and AI-driven attacks at UCLA.",
    tags: ["Security", "Research", "Python"],
  },
  {
    name: "Swarm Testbed @ JHU",
    blurb:
      "5 robots, TCP/IP, fail-over protocol. A patent rode on whether they could coordinate without a leader.",
    tags: ["Swarm Robotics", "Python", "ROS"],
  },
  {
    name: "FlipFinder-SD",
    blurb:
      "Automates fixer-upper hunting for realtors. Pulls MLS and county data so my dad's agency can spot deals without combing listings by hand.",
    tags: ["Real Estate", "Automation", "Python"],
  },
  {
    name: "FX Signals",
    blurb:
      "Real-time forex dashboard. Streams live prices, runs momentum and trend indicators, and flags buy/sell signals as they fire. Built for my uncle's trading desk.",
    tags: ["Finance", "Real-Time", "Python"],
  },
];

// Robotics & drone reel. IDs are YouTube video IDs (the 11-char string after "v=").
export const reel = [
  {
    id: "rOTlvyjGcDg",
    title: "FTC Worlds · Finals Match 3",
    caption:
      "Houston, 2024. The winning match. Captain and driver for The Clueless. 1st of 7,100+ teams.",
  },
  {
    id: "czSyygmNUbY",
    title: "Behind the Bot · The Clueless",
    caption:
      "FIRST's documentary on our championship run. Covers all six seasons, including the ones we got knocked out of early.",
  },
  {
    id: "kBFS7SaGf_A",
    title: "Robot Reveal · Freight Frenzy",
    caption:
      "Season-opening reveal of the robot I helped design and drive. Mechanical lead, season 4.",
  },
  {
    id: "MfP8-b64Ymw",
    title: "Environmental Remediation UAV",
    caption:
      "Autonomous pollution drone. YOLOv8 tuned to 96% precision on 6k+ images for ocean-trash detection.",
  },
];

export const stats = [
  { label: "World Championship", value: "1st / 7,100+" },
  { label: "Jacobs Scholars / year", value: "1 of 9" },
  { label: "San Diego Remarkable Teens", value: "1 of 25" },
  { label: "Patent @ Johns Hopkins", value: "Pending" },
];

export const links = [
  { label: "Email", icon: "email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "LinkedIn", icon: "linkedin", href: profile.linkedin, value: "/in/alex-battikha" },
  { label: "GitHub", icon: "github", href: profile.github, value: "@alex-battikha" },
  { label: "Book 15 min", icon: "calendar", href: profile.calendar, value: "cal.com/alex-battikha" },
];

export const now = [
  "Working with strvX partners and active clients to expand the network.",
  "Building a tool to surface fixer-upper properties in target markets, with my dad on the deal side.",
  "Tuning quant strategies for live deployment.",
  "Bioengineering coursework at UCSD, year one of four.",
];

export const toolbox = {
  Languages: ["Python", "TypeScript", "C++", "C", "Java", "MATLAB"],
  AI: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "scikit-learn"],
  Robotics: ["ROS", "SolidWorks", "RaspberryPi", "Arduino", "CAD/CAM"],
  Systems: ["Linux", "Git", "Next.js", "Vercel", "Postgres"],
};

export const pillars = [
  {
    k: "Boring beats clever",
    v: "Early FTC seasons I kept building clever mechanisms that broke when it mattered. Championship season we ran 99.1% uptime, mostly off boring parts we'd tested to death. Now I'd rather ship the version I know will hold up than the one that looks impressive.",
  },
  {
    k: "Own every layer",
    v: "At FTC 11212 I was mechanical lead, driver, and captain through the winning seasons. At strvX I'm the engineer, designer, and the one selling it. If I'm accountable for the outcome, I don't get to hide behind someone else's part of the stack.",
  },
  {
    k: "Queue is louder than the match",
    v: "Two minutes between matches and four people are yelling fixes at me at once. Staying calm was the easy part. The harder one was figuring out, in real time, whose feedback to actually act on. I lean on that filter every time the room gets loud now.",
  },
  {
    k: "Worlds wasn't year one",
    v: "Six seasons with FTC 11212 before we won in Houston. strvX, ecPATH, research at UCSD: I'm still in the messy middle of all three. The best stuff I've done has come out of stretches that felt like this.",
  },
];
