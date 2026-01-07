"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Eye, ArrowRight } from 'lucide-react';

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
    title: "Kwik Ride Mobile Taxi Platform",
    description: "A Scalable Mobile App for ride sharing and multiple passenger p2p with payment integration.",
    imageUrl: "/project2.png",
    technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"],
    link: "https://ascentsdemotest.space/",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 85,
      forks: 32,
      views: 950
    }
  },
  {
    title: "Marketplace Platform",
    description: "A scalable Marketplace Platform with advanced filtering, search, and payment integration.",
    imageUrl: "/project4.png",
    technologies: ["JavaScript", "Node.js", "PHP", "Paystack", "Html", "Css", "Bootstrap", "Mysql"],
    link: "https://growafri.com",
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
  {
    title: "Zeez Logistics - Shuttle Booking System",
    description: "A comprehensive shuttle booking platform with secure seat selection, multi-step booking process, and seamless payment integration. Features real-time trip availability and customer testimonials.",
    imageUrl: "/zeez-logistics.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Payment Gateway"],
    link: "https://zeezlogistics.ng/",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 150,
      forks: 60,
      views: 1800
    }
  },
  {
    title: "Rock City Academy - Educational Platform",
    description: "A British Council-certified educational platform offering study abroad programs, language courses, and comprehensive student services. Features program listings, testimonials, and multi-campus information.",
    imageUrl: "/rockcity-academy.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CMS", "Payment Integration"],
    link: "https://rockcityacademy.live/",
    github: "/contact",
    category: "Web App",
    stats: {
      stars: 200,
      forks: 75,
      views: 2500
    }
  },
];

const categories = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Other'];

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
          {title.toLowerCase().replace(/\s+/g, '-')}.com
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

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16 
      bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      {/* Animated background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full 
          bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-blue-400/30 
          dark:from-purple-500/20 dark:via-pink-500/15 dark:to-blue-500/20 
          blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full 
          bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-teal-400/30 
          dark:from-blue-500/20 dark:via-cyan-500/15 dark:to-teal-500/20 
          blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <main className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 
            bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
            bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Explore my portfolio of projects showcasing modern web development, 
            creative solutions, and technical expertise
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'Total Projects', value: '12+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Github Stars', value: '500+' },
              { label: 'Happy Clients', value: '20+' }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 
                p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl 
                hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 
                  dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-target px-6 py-3 rounded-2xl text-sm font-semibold
                  transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25'
                      : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div key={index} 
              className="group backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl 
                border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden
                transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2
                hover:shadow-3xl animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Project Image */}
              <div className="p-8 pb-0">
                <ProjectMockup imageUrl={project.imageUrl} title={project.title} />
              </div>

              {/* Category Badge */}
              <div className="absolute top-8 right-8 px-4 py-2 rounded-full text-sm 
                bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md
                text-white font-semibold shadow-lg z-20">
                {project.category}
              </div>

              <div className="p-8 pt-6 space-y-4">
                <h3 className="text-2xl font-bold mb-2 
                  bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
                  bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400 pt-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">{project.stats.views}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} 
                      className="px-3 py-1.5 rounded-full text-xs font-medium
                        bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                        dark:from-purple-500/20 dark:to-blue-500/20
                        border border-purple-500/20 dark:border-purple-500/30
                        text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex-1 flex items-center justify-center gap-2 
                      px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 
                      text-white font-semibold shadow-lg shadow-purple-500/25
                      hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300
                      hover:scale-105">
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  {project.github && (
                    <Link href={project.github}
                      className="cursor-target flex items-center justify-center gap-2
                        px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                        bg-white/50 dark:bg-gray-900/50 backdrop-blur-md
                        hover:border-purple-500 dark:hover:border-purple-500 
                        text-gray-700 dark:text-gray-300 font-semibold
                        transition-all duration-300 hover:scale-105">
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl
            border border-gray-200/50 dark:border-gray-700/50 p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Want to work together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project and create something amazing together
            </p>
            <Link href="/contact"
              className="cursor-target inline-flex items-center gap-2 px-10 py-4 rounded-2xl 
                bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold
                shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40
                transition-all duration-300 hover:scale-105">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
