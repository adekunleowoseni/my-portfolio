import Image from "next/image";
import Link from 'next/link';
import LogoLoop from '@/components/LogoLoopWrapper';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiFlutter, SiExpress } from 'react-icons/si';
import { ArrowRight, Sparkles, Code, Palette, Zap, Smartphone, Server } from 'lucide-react';

const ProjectMockup = ({ imageUrl, title }: { imageUrl: string; title: string }) => (
  <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden 
    bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 
    backdrop-blur-xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/30">
    {/* Browser-like top bar */}
    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-gray-50 to-gray-100 
      dark:from-gray-800 dark:to-gray-900 backdrop-blur-md border-b border-gray-200/50 
      dark:border-gray-700/50 rounded-t-3xl flex items-center px-6 gap-3 z-10">
      {/* Window controls */}
      <div className="flex gap-2">
        <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
        <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
      </div>
      {/* URL bar */}
      <div className="ml-4 flex-1 bg-white/60 dark:bg-gray-900/60 rounded-lg h-7 
        flex items-center px-4 border border-gray-200/50 dark:border-gray-700/50">
        <div className="w-3.5 h-3.5 text-gray-400">🔒</div>
        <span className="ml-2 text-xs text-gray-600 dark:text-gray-400 truncate font-mono">
          https://{title.toLowerCase().replace(/\s+/g, '-')}.com
        </span>
      </div>
    </div>
    
    {/* Website preview */}
    <div className="relative w-full h-full mt-8 rounded-2xl overflow-hidden shadow-inner">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-top"
        quality={95}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 
        dark:to-black/10" />
    </div>
  </div>
);

export default function Home() {
  const techLogos = [
    { node: <SiReact className="w-12 h-12 text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="w-12 h-12 text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs className="w-12 h-12 text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress className="w-12 h-12 text-gray-800 dark:text-white" />, title: "Express.js", href: "https://expressjs.com" },
    { node: <SiMongodb className="w-12 h-12 text-[#47A248]" />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiReact className="w-12 h-12 text-[#61DAFB]" style={{ opacity: 0.8 }} />, title: "React Native", href: "https://reactnative.dev" },
    { node: <SiFlutter className="w-12 h-12 text-[#02569B]" />, title: "Flutter", href: "https://flutter.dev" },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience', icon: Sparkles },
    { value: '50+', label: 'Projects Completed', icon: Code },
    { value: '30+', label: 'Happy Clients', icon: Palette },
    { value: '99%', label: 'Success Rate', icon: Zap },
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description: "Building complete web applications with modern frontend and backend technologies",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with React Native and Flutter",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & API Development",
      description: "Designing scalable server-side solutions, RESTful APIs, and database architectures",
      icon: Server,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      {/* Enhanced animated background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full 
          bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-blue-400/30 
          dark:from-purple-500/20 dark:via-pink-500/15 dark:to-blue-500/20 
          blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full 
          bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-teal-400/30 
          dark:from-blue-500/20 dark:via-cyan-500/15 dark:to-teal-500/20 
          blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px] rounded-full 
          bg-gradient-to-r from-pink-400/20 via-purple-400/15 to-indigo-400/20 
          dark:from-pink-500/15 dark:via-purple-500/10 dark:to-indigo-500/15 
          blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 
              dark:border-gray-700/50 shadow-lg mb-4">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for new projects
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 
                dark:from-purple-400 dark:via-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
                Fullstack Developer
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl mt-2 
                text-gray-800 dark:text-gray-100">
                & Mobile App Developer
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto 
              leading-relaxed font-light">
              I build end-to-end solutions from web applications to mobile apps, 
              creating scalable, performant, and user-friendly digital experiences 
              with modern technologies and best practices
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/projects"
                className="group cursor-target px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                  text-white rounded-2xl font-semibold shadow-xl shadow-purple-500/25 
                  hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 
                  hover:scale-105 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact"
                className="cursor-target px-8 py-4 rounded-2xl font-semibold 
                  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 
                  border-gray-200 dark:border-gray-700 hover:border-purple-500 
                  dark:hover:border-purple-500 text-gray-800 dark:text-gray-200 
                  hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get in Touch
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} 
                    className="group backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 
                      p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 
                      shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2
                      transition-all duration-500">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                        dark:from-purple-500/20 dark:to-blue-500/20">
                        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 
                      dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4
              bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index}
                  className="group backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 
                    p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 
                    shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2
                    transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} 
                    flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 
                    transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4
              bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern tools and frameworks for exceptional results
            </p>
          </div>
          
          <div className="relative h-[250px] overflow-hidden rounded-3xl 
            backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 
            dark:border-gray-700/50 shadow-2xl p-8">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={64}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4
              bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing my best work and creative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Modern Web Payment Application",
                description: "A full-stack web application built with Next.js, featuring real-time updates, authentication, and seamless payment integration.",
                imageUrl: "/velon.png",
                link: "/projects",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "E-Commerce Platform",
                description: "A scalable e-commerce solution with advanced filtering, search capabilities, and secure payment integration.",
                imageUrl: "/Project3.png",
                link: "/projects",
                technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "MySQL"]
              }
            ].map((project, index) => (
              <div key={index}
                className="group backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl
                  border border-gray-200/50 dark:border-gray-700/50 overflow-hidden
                  shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <Link href={project.link} className="cursor-target block">
                  <div className="p-8">
                    <ProjectMockup imageUrl={project.imageUrl} title={project.title} />
                  </div>
                  
                  <div className="p-8 pt-0 space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r 
                      from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
                      bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} 
                          className="px-4 py-1.5 rounded-full text-sm font-medium
                            bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                            dark:from-purple-500/20 dark:to-blue-500/20
                            border border-purple-500/20 dark:border-purple-500/30
                            text-gray-700 dark:text-gray-300">
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
      <section className="relative py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl
            border border-gray-200/50 dark:border-gray-700/50 p-12 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6
              bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life with cutting-edge design and development
            </p>
            <Link href="/contact"
              className="cursor-target inline-flex items-center gap-2 px-10 py-5 
                bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl 
                font-semibold shadow-xl shadow-purple-500/25 hover:shadow-2xl 
                hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
