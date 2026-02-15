import { Project, SkillCategory, Award, Education } from './types';

export const PERSONAL_INFO = {
  name: "Samuel Ayomide Abolarinwa",
  title: "Mechatronics Engineering Student | Reliable AI Systems",
  bio: "I am a Mechatronics Engineering student with a deep interest in Embodied AI, Robotics, and Intelligent Control. My work bridges the gap between dynamic system modelling and user-oriented AI applications, striving to design intelligent machines that enhance human capability.",
  email: "abolarinwasa@gmail.com",
  phone: "+234 810 411 8605",
  github: "https://github.com/Ayomide-16",
  githubHandle: "Ayomide-16",
  location: "Minna, Nigeria",
  profileImage: "./profile.jpg"
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
  duration: "2023 – 2027 (Expected)",
  grade: "CGPA: 4.64 / 5.00"
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
    items: ["React", "Next.js", "Git/GitHub", "Supabase", "TailwindCSS"]
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