import Image from 'next/image';
import SkillBar from '@/components/SkillBar';
import Link from 'next/link';
import { MapPin, Mail, GraduationCap, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React', level: '95%' },
    { name: 'TypeScript', level: '90%' },
    { name: 'Next.js', level: '85%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'Node.js', level: '80%' },
    { name: 'UI/UX Design', level: '85%' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/adekunleowoseni',
      icon: Github,
      color: 'from-gray-600 to-gray-900',
      hoverColor: 'hover:from-gray-700 hover:to-black'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/owoseniadekunle',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/keliekunlex',
      icon: Twitter,
      color: 'from-sky-400 to-sky-600',
      hoverColor: 'hover:from-sky-500 hover:to-sky-700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kellykunlex/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      hoverColor: 'hover:from-pink-600 hover:to-purple-600'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-600 hover:to-red-800'
    }
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16 
      bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      {/* Background effects */}
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
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6
            bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
            bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Profile & Social */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-10 rounded-3xl 
              border border-gray-200/50 dark:border-gray-700/50 shadow-2xl
              transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
              <div className="relative w-56 h-56 mx-auto mb-8 group">
                {/* Profile Image with Enhanced Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 
                  animate-spin-slow blur-xl opacity-50 transition-all duration-500 group-hover:blur-2xl group-hover:opacity-70" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 
                  border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/Adekunle.jpg"
                    alt="Profile"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r 
                from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
                bg-clip-text text-transparent">
                Adekunle Owoseni
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8 font-medium">
                Frontend Developer & UI/UX Designer
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl 
                  bg-gradient-to-r from-purple-500/5 to-blue-500/5 
                  dark:from-purple-500/10 dark:to-blue-500/10 
                  hover:translate-x-2 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-500/20">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl 
                  bg-gradient-to-r from-purple-500/5 to-blue-500/5 
                  dark:from-purple-500/10 dark:to-blue-500/10 
                  hover:translate-x-2 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a href="mailto:owoseniadekunle94@gmail.com" 
                    className="cursor-target text-gray-700 dark:text-gray-200 font-medium 
                    hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    owoseniadekunle94@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl 
                  bg-gradient-to-r from-purple-500/5 to-blue-500/5 
                  dark:from-purple-500/10 dark:to-blue-500/10 
                  hover:translate-x-2 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-pink-500/10 dark:bg-pink-500/20">
                    <GraduationCap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">B.Sc. Computer Science</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Connect With Me
              </h3>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-target group flex items-center gap-4 p-5 rounded-2xl
                      backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 
                      border border-gray-200/50 dark:border-gray-700/50
                      transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1
                      shadow-lg hover:shadow-2xl ${link.hoverColor}`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color}
                      flex items-center justify-center text-white shadow-lg
                      transform transition-all duration-500 group-hover:scale-110 
                      group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 flex-1">
                      {link.name}
                    </span>
                    <span className="opacity-0 transform translate-x-2 
                      transition-all duration-300 group-hover:opacity-100 
                      group-hover:translate-x-0 text-gray-600 dark:text-gray-400">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column - About & Skills */}
          <div className="space-y-8">
            {/* About Me */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-10 rounded-3xl 
              border border-gray-200/50 dark:border-gray-700/50 shadow-2xl
              transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r 
                from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
                bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Passionate frontend developer with a keen eye for design and user experience. 
                  I specialize in creating responsive, accessible, and performant web applications 
                  using modern technologies and best practices.
                </p>
                <p>
                  With a strong foundation in both development and design, I bridge the gap between 
                  beautiful interfaces and robust functionality. My goal is to create digital experiences 
                  that not only look stunning but also provide exceptional user value.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new design trends, contributing to open-source 
                  projects, and continuously learning to stay at the forefront of web development.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-10 rounded-3xl 
              border border-gray-200/50 dark:border-gray-700/50 shadow-2xl
              transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
                bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
