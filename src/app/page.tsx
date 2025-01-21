import Image from "next/image";
import Link from 'next/link';

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
          https://{title.toLowerCase().replace(/\s+/g, '-')}.com
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

export default function Home() {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-600 to-gray-900' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind', icon: '🎨', color: 'from-teal-400 to-teal-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '99%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full 
        bg-purple-500/20 dark:bg-purple-500/30 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full 
        bg-blue-500/20 dark:bg-blue-500/30 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full 
        bg-pink-500/20 dark:bg-pink-500/30 blur-[100px] animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 
                bg-clip-text text-transparent">
                Frontend Developer
              </span>
              <br />
              <span className="text-4xl sm:text-6xl">& UI/UX Designer</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Creating beautiful, responsive, and user-friendly web experiences with modern technologies
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                  rounded-full hover:opacity-90 transition-all duration-300 shadow-lg 
                  hover:shadow-purple-500/25 hover:scale-105">
                View My Work
              </Link>
              <Link href="/contact"
                className="px-8 py-4 rounded-full hover:scale-105 transition-all duration-300
                  border border-gray-200 dark:border-gray-800 hover:border-purple-500 
                  dark:hover:border-purple-500 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                Get in Touch
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
              {stats.map((stat, index) => (
                <div key={index} 
                  className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-2xl
                    border border-gray-200 dark:border-gray-800 transform hover:scale-105
                    transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 
                    bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Technologies I Work With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index}
                className="group backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-2xl
                  border border-gray-200 dark:border-gray-800 transform hover:scale-105
                  transition-all duration-300 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-medium text-gray-800 dark:text-gray-200 
                  group-hover:text-purple-600 dark:group-hover:text-purple-400
                  transition-colors duration-300">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Modern Web PaymentApplication",
                description: "A full-stack web application built with Next.js, featuring real-time updates and authentication.",
                imageUrl: "/velon.png",
                link: "/projects",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "E-Commerce Platform",
                description: "A scalable e-commerce solution with advanced filtering and payment integration.",
                imageUrl: "/Project3.png",
                link: "/projects",
                technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"]
              }
            ].map((project, index) => (
              <div key={index}
                className="group backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-3xl
                  border border-gray-200 dark:border-gray-800 overflow-hidden
                  transform hover:scale-[1.02] transition-all duration-500
                  hover:shadow-xl hover:shadow-purple-500/10">
                <Link href={project.link} className="block">
                  <div className="p-6">
                    <ProjectMockup imageUrl={project.imageUrl} title={project.title} />
                  </div>
                  
                  <div className="p-6 pt-0">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r 
                      from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's work together to bring your ideas to life
          </p>
          <Link href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500
              text-white rounded-full hover:opacity-90 transition-all duration-300
              shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
