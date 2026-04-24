export const profile = {
  name: "Alex Battikha",
  tagline: "I build things. Currently: strvX and surgical robots.",
  longTagline:
    "I build things. Currently: strvX, bringing AI automation to businesses and government to cut costs and grow revenue. A services arm for custom builds, a product arm for off-the-shelf systems. On the side, I research surgical robotics at UC San Diego.",
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

export const ventures = [
  {
    name: "strvX",
    role: "Founder",
    status: "Building now",
    blurb:
      "AI automation for businesses and government. A services arm for custom deployments and a product line shipping off-the-shelf systems. The goal is always the same: cut costs, grow revenue.",
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
    href: "https://www.youtube.com/watch?v=czSyygmNUbY",
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
      "FIRST's documentary on our championship run. Six seasons of building, breaking, and coming back.",
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
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "LinkedIn", href: profile.linkedin, value: "/in/alex-battikha" },
  { label: "GitHub", href: profile.github, value: "@alex-battikha" },
  { label: "Book 15 min", href: profile.calendar, value: "cal.com/alex-battikha" },
];

export const now = [
  "Shipping the first strvX customer pilots.",
  "Co-leading ecPATH toward a Nature submission.",
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
    v: "Early FTC seasons I chased clever mechanisms that broke at the worst moments. Championship season we ran at 99.1% uptime: mostly boring parts, tested to death. I default to the version that works every time over the version that impresses on a whiteboard.",
  },
  {
    k: "Own every layer",
    v: "At FTC 11212 I was mechanical lead, driver, and captain through the winning seasons. At strvX I'm the engineer, designer, and the one selling it. If I'm accountable for the outcome, I don't get to hide behind someone else's part of the stack.",
  },
  {
    k: "Queue is louder than the match",
    v: "Two minutes between games, everyone shouting corrections at once. The real skill isn't staying calm. It's picking the two or three voices that actually help and tuning out the rest. That filter is the whole game anywhere the stakes are real.",
  },
  {
    k: "Worlds wasn't year one",
    v: "Six seasons on FTC 11212 to reach Houston. Most of what I care about now (strvX, ecPATH, research) are long bets I'm still grinding on. The best results almost always live inside the seasons that don't look like progress.",
  },
];
