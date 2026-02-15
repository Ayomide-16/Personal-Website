export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  link?: string;
  award?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  rank?: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
}
