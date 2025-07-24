import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  github?: string;
  category: 'Web App' | 'Mobile App' | 'UI/UX' | 'Other';
  stats: {
    stars: number;
    forks: number;
    views: number;
  };
};

const projects: Project[] = [
  {
    title: "Modern Web Payment Application",
    description: "A full-stack web application built with Next.js, featuring real-time updates, authentication, and a responsive design.",
    imageUrl: "/velon.png",
    technologies: ["TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "Node.js", "Express", "Paystack", "Stripe"],
    link: "https://www.velonpay.com/",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 120,
      forks: 45,
      views: 1200
    }
  },
  {
    title: "Hair Styling Training Platform",
    description: "A scalable Hair Styling Training solution with advanced filtering, search, and payment integration.",
    imageUrl: "/project2.png",
    technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"],
    link: "https://thetouchacademy.com",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 85,
      forks: 32,
      views: 950
    }
    },
  
  {
    title: "School Management System",
    description: "A scalable School Management System with advanced filtering, search, and payment integration.",
    imageUrl: "/project4.png",
    technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"],
    link: "https://gosfem.com",
    github: "/contact",
    category: "UI/UX",
    stats: {
      stars: 85,
      forks: 32,
      views: 950
    }
    },
  {
    title: "E-Commerce Platform",
    description: "A Scalable E-Commerce solution with advanced filtering, search, and payment integration.",
    imageUrl: "/Project3.png",
    technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"],
    link: "https://www.worus.ca",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 85,
      forks: 32,
      views: 950
    }
  },
  // Add more projects as needed
];

const categories = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Other'];

// Add ProjectMockup component
const ProjectMockup = ({ imageUrl, title }: { imageUrl: string; title: string }) => (
  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden 
    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 shadow-xl">
    {/* Browser-like top bar */}
    <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100/90 dark:bg-gray-900/90 
      backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 rounded-t-2xl 
      flex items-center px-4 gap-2 z-10">
      {/* Window controls */}
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      {/* URL bar */}
      <div className="ml-4 flex-1 bg-white/50 dark:bg-black/50 rounded-full h-6 
        flex items-center px-3">
        <div className="w-4 h-4 text-gray-400">🔒</div>
        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 truncate">
          {title.toLowerCase().replace(/\s+/g, '-')}.com
        </span>
      </div>
    </div>
    
    {/* Website preview */}
    <div className="relative w-full h-full mt-6 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-top"
        quality={95}
      />
      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 
        dark:to-black/10" />
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16">
      {/* Animated background effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full 
        bg-purple-500/20 dark:bg-purple-500/30 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full 
        bg-blue-500/20 dark:bg-blue-500/30 blur-[100px] animate-blob animation-delay-2000" />

      <main className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 
            bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore my portfolio of projects showcasing modern web development, 
            creative solutions, and technical expertise.
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: 'Total Projects', value: '12+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Github Stars', value: '500+' },
              { label: 'Happy Clients', value: '20+' }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/30 dark:bg-black/30 
                p-4 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 
                  bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full text-sm font-medium
                  bg-white/50 dark:bg-black/50 backdrop-blur-sm
                  border border-gray-200 dark:border-gray-800
                  hover:border-purple-500 dark:hover:border-purple-500
                  transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} 
              className="group backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-3xl 
                border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden
                transform transition-all duration-500 hover:scale-[1.02]
                animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}>
              {/* Replace the existing Image component with ProjectMockup */}
              <div className="p-6">
                <ProjectMockup imageUrl={project.imageUrl} title={project.title} />
              </div>

              {/* Category Badge - moved inside mockup */}
              <div className="absolute top-8 right-8 px-3 py-1 rounded-full text-sm 
                bg-black/50 dark:bg-white/50 backdrop-blur-sm text-white dark:text-black 
                font-medium z-20">
                {project.category}
              </div>

              <div className="p-8 pt-0">
                <h3 className="text-2xl font-bold mb-3 
                  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex gap-6 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <span>⭐</span> {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🔄</span> {project.stats.forks}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👁️</span> {project.stats.views}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} 
                      className="px-3 py-1 rounded-full text-sm font-medium
                        bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                        dark:from-purple-500/20 dark:to-blue-500/20
                        border border-purple-500/20 dark:border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link href={project.link}
                    className="flex-1 text-center px-6 py-2 rounded-xl 
                      bg-gradient-to-r from-purple-500 to-blue-500 text-white
                      hover:opacity-90 transition-all duration-300">
                    Live Demo
                  </Link>
                  {project.github && (
                    <Link href={project.github}
                      className="px-6 py-2 rounded-xl border border-gray-200 
                        dark:border-gray-800 hover:border-purple-500 
                        dark:hover:border-purple-500 transition-all duration-300">
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
          <Link href="/contact"
            className="inline-block px-8 py-3 rounded-xl 
              bg-gradient-to-r from-purple-500 to-blue-500 text-white
              hover:opacity-90 transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
} 
