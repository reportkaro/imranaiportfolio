export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'lessonloom',
    title: 'LessonLoom: Automated Lesson Generation Platform',
    description:
      'An innovative platform that automates the creation of educational materials using AI and templating systems',
    fullDescription: `
      As a product designer for LessonLoom, I led the design process for an innovative platform that automates 
      the creation of educational materials using AI and templating systems. This case study walks through how our 
      design team approached this complex challenge – from understanding user needs and pain points to crafting an 
      intuitive interface that empowers educators to create high-quality content at scale.
    `,
    technologies: ['Vue.js', '.NET Core', 'Python', 'Azure OpenAI', 'AWS S3'],
    liveUrl: '',
    githubUrl: '',
    images: ['/projects/lessonloom.jpg'],
    featured: true,
  },
  {
    slug: 'project-1',
    title: 'AI-Powered Chat Interface',
    description: 'A sophisticated chat interface with real-time AI responses',
    fullDescription: `
      This project showcases a modern AI chat interface that combines elegant design with powerful functionality.
      The interface features real-time responses, message history, and context-aware conversations.
      
      Key Features:
      - Real-time AI responses using advanced language models
      - Elegant animations and transitions
      - Mobile-responsive design
      - Context-aware conversation handling
      - Optimized performance with lazy loading
    `,
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'AI Integration'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/username/project1',
    images: ['/projects/project1/main.jpg', '/projects/project1/detail1.jpg', '/projects/project1/detail2.jpg'],
    featured: true,
  },
  // Add more projects here as you build them
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export const featuredProjects = [
  // ... existing projects
  {
    id: 'your-case-study-id', // usually a string or number
    title: 'Your Case Study Title',
    description: 'A short description of your case study',
    slug: 'your-case-study-slug', // This will be used in the URL
    tagline: 'UX Design / AI / Whatever tags apply',
    image: '/images/projects/your-case-study-image.jpg', // Add this image to your public folder
    // Any other properties the existing projects have
  },
];
