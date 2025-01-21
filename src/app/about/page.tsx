import Image from 'next/image';
import SkillBar from '@/components/SkillBar';
import Link from 'next/link';

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
      icon: '💻',
      color: 'from-gray-500 to-black'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/owoseniadekunle',
      icon: '💼',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/keliekunlex',
      icon: '🐦',
      color: 'from-sky-400 to-sky-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kellykunlex/',
      icon: '📸',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: '🎥',
      color: 'from-red-500 to-red-700'
    }
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16">
      {/* Background effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full 
        bg-purple-500/20 dark:bg-purple-500/30 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full 
        bg-blue-500/20 dark:bg-blue-500/30 blur-[100px] animate-blob animation-delay-2000" />

      <main className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Profile & Social */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-8 rounded-3xl 
              border border-gray-200 dark:border-gray-800 shadow-xl
              transform transition-all duration-700 hover:scale-[1.02]">
              <div className="relative w-48 h-48 mx-auto mb-6 group">
                {/* Profile Image with Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 
                  animate-spin-slow blur-md transition-all duration-500 group-hover:blur-lg" />
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/Adekunle.jpg"
                    alt="Profile"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r 
                from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Adekunle Owoseni
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6">
                Frontend Developer & UI/UX Designer
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700 dark:text-gray-200">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-700 dark:text-gray-200">contact@example.com</span>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-2xl">🎓</span>
                  <span className="text-gray-700 dark:text-gray-200">B.Sc. Computer Science</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-2xl
                    backdrop-blur-sm bg-white/50 dark:bg-black/50 
                    border border-gray-200 dark:border-gray-800
                    transform transition-all duration-300 hover:scale-[1.02]
                    hover:shadow-lg`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${link.color}
                    flex items-center justify-center text-xl
                    transform transition-all duration-500 group-hover:scale-110 
                    group-hover:rotate-6`}>
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.name}</span>
                  <span className="ml-auto opacity-0 transform translate-x-2 
                    transition-all duration-300 group-hover:opacity-100 
                    group-hover:translate-x-0">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - About & Skills */}
          <div className="space-y-8">
            {/* About Me */}
            <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-8 rounded-3xl 
              border border-gray-200 dark:border-gray-800 shadow-xl
              transform transition-all duration-700 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r 
                from-purple-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate frontend developer with a keen eye for design and user experience. 
                I specialize in creating responsive, accessible, and performant web applications 
                using modern technologies and best practices. With a strong foundation in both 
                development and design, I bridge the gap between beautiful interfaces and 
                robust functionality.
              </p>
            </div>

            {/* Skills */}
            <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-8 rounded-3xl 
              border border-gray-200 dark:border-gray-800 shadow-xl
              transform transition-all duration-700 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Skills
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