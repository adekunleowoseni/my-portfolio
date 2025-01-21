'use client';

interface SkillProps {
  name: string;
  level: string;
  index: number;
}

const gradients = [
  'from-purple-500 to-blue-500',
  'from-pink-500 to-purple-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-teal-500',
  'from-orange-500 to-pink-500',
  'from-indigo-500 to-purple-500'
];

export default function SkillBar({ name, level, index }: SkillProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <div className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-blue-500">{level}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-2 bg-gradient-to-r ${gradient} rounded-full
            transition-all duration-1000 ease-out shadow-lg`}
          style={{ width: '0%' }}
          onAnimationEnd={(e) => {
            (e.target as HTMLElement).style.width = level;
          }}
        />
      </div>
    </div>
  );
} 