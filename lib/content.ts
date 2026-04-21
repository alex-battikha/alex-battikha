export const profile = {
  name: "Alex Battikha",
  tagline: "I build things. Currently: strvX and surgical robots.",
  longTagline:
    "I build things. Currently: strvX, AI that handles the busywork for small businesses so owners can actually run them. On the side, I research surgical robotics at UC San Diego.",
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
      "AI that runs the boring parts of a small business so the owner can get back to running the business.",
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
    role: "Captain · 6 years",
    status: "World Champions",
    blurb:
      "Six seasons leading the team to a World Championship in Houston. Robot reliability above 99%. Watch us in Behind the Bot.",
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

export const stats = [
  { label: "World Championship", value: "1st / 7,100+" },
  { label: "Jacobs Scholars / year", value: "1 of 9" },
  { label: "FTC mechanical uptime", value: "99.1%" },
  { label: "YOLOv8 precision", value: "96%" },
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
    k: "Reliability is the real flex",
    v: "99.1% mechanical uptime across a 25-week build. Nobody claps for a robot that dies in the final.",
  },
  {
    k: "Own the whole stack",
    v: "CAD, CNC, code, driver. I learn every layer before I trust the robot in my hands.",
  },
  {
    k: "Calm is a skill",
    v: "There's pressure not to screw up. You talk through the chaos instead of over it.",
  },
  {
    k: "Play the long game",
    v: "Six years on one team. Worlds didn't happen in year one, or year three.",
  },
];
