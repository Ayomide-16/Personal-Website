import { Project, SkillCategory, Award, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Samuel Ayomide Abolarinwa",
  title: "Mechatronics Engineering Student | Reliable Embodied AI Systems",
  bio: "I’m a Mechatronics Engineering student passionate about Embodied AI, robotics, and intelligent control. I enjoy working at the intersection of system dynamics and applied AI, designing machines that can sense, decide, and act autonomously. My goal is to build intelligent systems that solve real-world problems and enhance human potential.",
  email: "abolarinwasa@gmail.com",
  phone: "+234 810 411 8605",
  github: "https://github.com/Ayomide-16",
  githubHandle: "Ayomide-16",
  location: "Minna, Nigeria",
  profileImage: "/profile.jpg",
  resume: "https://drive.google.com/file/d/1A0uNegUB06gVim5dqTpqSvEuM9ngMrYr/view?usp=sharing"
};

export const RESEARCH_INTERESTS = [
  "Artificial Intelligence & Machine Intelligence",
  "Intelligent Control & Robotics",
  "Dynamic System Modelling",
  "Embedded Robotics & IoT"
];

export const PROJECTS: Project[] = [
  {
    title: "YieldPlus AI",
    subtitle: "Intelligent Agricultural Advisory Platform",
    award: "Third Runner-Up, Nigeria AI Hackathon (DeepFunding.ai)",
    description: "An AI-powered platform for smallholder farmers providing real-time crop analysis, soil nutrient recommendations, and pest identification. Integrated Gemini 2.5 Pro & Flash models for multi-language support (English, Hausa, Yoruba) and data-driven decision making.",
    techStack: ["TypeScript", "React", "Gemini 2.5 API", "Supabase", "TailwindCSS"],
    link: "https://github.com/Ayomide-16"
  },
  {
    title: "End-to-End Computer Vision System",
    subtitle: "Independent Research Project",
    description: "Constructed a complete vision pipeline recognizing specific objects (hair dryers, kites, neckties). Managed the entire lifecycle: dataset preparation, training a custom CNN with TensorFlow/Keras, and deploying via a Flask API with a responsive web interface.",
    techStack: ["Python", "TensorFlow", "Keras", "Flask", "HTML/CSS"],
    link: "https://github.com/Ayomide-16"
  },
  {
    title: "Jarvis Navigation Simulator",
    subtitle: "Speech-Controlled Robot Navigation",
    award: "FUTMinna MATLAB Competition Project",
    description: "Developed a voice-controlled robot navigation system using MATLAB App Designer. Implemented MFCC feature extraction and a k-NN speech recognition model, integrated with PRM and Pure Pursuit algorithms for autonomous path planning.",
    techStack: ["MATLAB", "Speech Processing", "k-NN", "Path Planning"],
    link: "https://github.com/Ayomide-16"
  },
  {
    title: "SmartLearn LMS Module",
    subtitle: "Content Management System",
    description: "Led development of a comprehensive content management module for an LMS. Designed authentication flows, permission hierarchies, and resolved complex API integration issues. Contributed significantly to mobile app logic and data preprocessing.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    link: "https://github.com/Ayomide-16"
  }
];

export const EDUCATION: Education = {
  school: "Federal University of Technology, Minna",
  degree: "B.Eng. Mechatronics Engineering",
  duration: "2023 – 2027 (Expected)"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["MATLAB", "Python", "TypeScript", "JavaScript", "C++"]
  },
  {
    category: "AI & Robotics",
    items: ["TensorFlow/Keras", "Gemini API", "Computer Vision", "MFCC Speech Processing", "Pure Pursuit Navigation", "Simulink"]
  },
  {
    category: "Systems & Embedded",
    items: ["ESP32", "Arduino", "Control Systems", "IoT Sensors", "Linux"]
  },
  {
    category: "Tools & Web",
    items: ["React", "Next.js", "Git/GitHub", "Supabase", "TailwindCSS", "GCP", "Amazon Cloud"]
  }
];

export const AWARDS: Award[] = [
  {
    title: "First Runner-Up",
    organization: "FUTMinna MATLAB Challenge",
    year: "2025"
  },
  {
    title: "Third Runner-Up",
    organization: "Nigeria AI Hackathon (Regional)",
    year: "2025"
  },
  {
    title: "Winner",
    organization: "NSE Science Quiz Competition (Minna Zone)",
    year: "2022"
  },
  {
    title: "Overall Best Graduating Student",
    organization: "Federal Government College Minna",
    year: "2022"
  }
];

export const CERTIFICATIONS: Certification[] = [
  // MathWorks
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    link: "https://drive.google.com/file/d/14La3zXLGWp5BI0TMtzxbdYXRuG6eAeT0/view"
  },
  {
    title: "Simulink Fundamentals",
    issuer: "MathWorks",
    link: "https://drive.google.com/file/d/1AIjUI4IzuNfuoUEhxHW5svlgHpZtYFIn/view"
  },
  {
    title: "Simulink Onramp",
    issuer: "MathWorks",
    link: "https://drive.google.com/file/d/14XSu9j2ZmSJ8o_q9ctj8Z58mQFtEdxFC/view"
  },
  {
    title: "Control Design with Simulink Onramp",
    issuer: "MathWorks",
    link: "https://drive.google.com/file/d/1MYZ50NCHqWQFKkDTbXADC-58R4G5mM2U/view"
  },
  // Google Cloud Skills
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/19648938"
  },
  {
    title: "Machine Learning Operations (MLOps) for Generative AI",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/19603751"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/19649275"
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/19649384"
  },
  {
    title: "Introduction to Security in the World of AI",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/19880406"
  },
  {
    title: "Introduction to AI and Machine Learning on Google Cloud",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/20103497"
  },
  {
    title: "Responsible AI for Developers: Fairness & Bias",
    issuer: "Google Cloud",
    link: "https://www.skills.google/public_profiles/5576837a-6a9c-478d-8182-da37e4cc967f/badges/20172424"
  },
  // Coursera
  {
    title: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/14FbtF2AgjtZ6XF3QfIa4ks4e2GsFnCZ0/view"
  }
];