import React, { useMemo } from 'react';
import { 
  Dumbbell, 
  Brain, 
  Heart, 
  Calendar, 
  BookOpen, 
  CheckSquare, 
  Sparkles,
  ChevronRight,
  Share2
} from 'lucide-react';

/**
 * CONFIGURATION: Define your Apps and Categories here.
 */
const CATEGORIES = [
  { id: 'fitness', name: '💪 Fitness', description: 'Body & Physical Health' },
  { id: 'mindset', name: '🧠 Mindset', description: 'Emotional Intelligence & IQ' },
  { id: 'health', name: '🏥 Health', description: 'Tracking & Well-being' },
  { id: 'productivity', name: '⚡ Productivity', description: 'Organization & Growth' }
];

const APPS = [
  { 
    id: 'core28', 
    name: 'Core 28', 
    description: 'A 28-day fitness plan maker to transform your physique.',
    icon: <Dumbbell className="text-blue-600" />, 
    path: '/Core28/', 
    category: 'fitness',
    gradient: 'from-blue-50/80 to-blue-100/40 dark:from-blue-900/30 dark:to-blue-800/20'
  },
  { 
    id: 'posefix', 
    name: 'Pose Fix', 
    description: 'AI-powered posture correction and alignment tool.',
    icon: <Sparkles className="text-amber-600" />, 
    path: '/pose-fix/', 
    category: 'fitness',
    gradient: 'from-amber-50/80 to-amber-100/40 dark:from-amber-900/30 dark:to-amber-800/20'
  },
  { 
    id: 'eq-analyzer', 
    name: 'EQ Analyzer', 
    description: 'Deep dive into your emotional intelligence patterns.',
    icon: <Brain className="text-purple-600" />, 
    path: '/eq-analyzer/', 
    category: 'mindset',
    gradient: 'from-purple-50/80 to-purple-100/40 dark:from-purple-900/30 dark:to-purple-800/20'
  },
  { 
    id: 'cyclea', 
    name: 'Cyclea', 
    description: 'Advanced period manager and cycle tracking.',
    icon: <Calendar className="text-pink-600" />, 
    path: '/cyclea/', 
    category: 'health',
    gradient: 'from-pink-50/80 to-pink-100/40 dark:from-pink-900/30 dark:to-pink-800/20'
  },
  { 
    id: 'book-guide', 
    name: 'ReadTrack', 
    description: 'Guide and tracker for your reading journey.',
    icon: <BookOpen className="text-emerald-600" />, 
    path: '/read-track/', 
    category: 'productivity',
    gradient: 'from-emerald-50/80 to-emerald-100/40 dark:from-emerald-900/30 dark:to-emerald-800/20'
  },
  { 
    id: 'todo', 
    name: 'Growth List', 
    description: 'Daily habits and tasks for personal development.',
    icon: <CheckSquare className="text-orange-600" />, 
    path: '/todo/', 
    category: 'productivity',
    gradient: 'from-orange-50/80 to-orange-100/40 dark:from-orange-900/30 dark:to-orange-800/20'
  },
  { 
    id: 'rel-test', 
    name: 'Connection Test', 
    description: 'Analyze and improve your relationship health.',
    icon: <Heart className="text-red-600" />, 
    path: '/DeepRelTest/', 
    category: 'mindset',
    gradient: 'from-red-50/80 to-red-100/40 dark:from-red-900/30 dark:to-red-800/20'
  }
];

const AppCard = ({ app }) => {
  const appUrl = `${window.location.origin}${app.path}?from=betterme`;

  return (
    <div 
      onClick={() => window.location.href = appUrl}
      className={`flex-shrink-0 w-[80%] md:w-80 bg-gradient-to-br ${app.gradient} backdrop-blur-md rounded-[2.5rem] p-8 shadow-sm border border-white/40 dark:border-slate-700/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group`}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
          {app.icon}
        </div>
        <div className="p-2.5 rounded-full bg-white/40 dark:bg-slate-800/40">
          <ChevronRight className="text-slate-400 w-4 h-4" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{app.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium opacity-70">
        {app.description}
      </p>
    </div>
  );
};

const CategorySection = ({ category, apps }) => {
  if (apps.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="px-8 mb-6 text-center md:text-left">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{category.name}</h2>
        <div className="h-1.5 w-10 bg-indigo-500 rounded-full mt-2 mx-auto md:mx-0 opacity-40"></div>
      </div>
      
      <div className="flex overflow-x-auto pb-8 px-8 gap-8 no-scrollbar scroll-smooth">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'BetterMe Hub',
        text: 'Discover a better version of yourself with these personal growth tools.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  return (
    <div className="min-h-screen bg-animate text-slate-900 selection:bg-indigo-100 dark:text-white transition-colors">
      {/* Header - Transparent/Minimal */}
      <header className="fixed top-0 left-0 right-0 z-20 px-6 py-6 flex justify-end">
        <button 
          onClick={handleShare}
          className="p-3 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/40 dark:border-slate-700/30 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-full transition-all text-slate-800 dark:text-slate-200 shadow-sm"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </header>

      <main className="max-w-6xl mx-auto pt-16 pb-20">
        {/* Central Brand Hero Section */}
        <div className="px-8 mb-24 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-indigo-300 dark:shadow-none mb-8 animate-pulse-slow">
            <Sparkles className="text-white w-12 h-12" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
            BetterMe
          </h1>
          <p className="text-xl font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
            Discover a better version of yourself.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {CATEGORIES.map(cat => (
            <CategorySection 
              key={cat.id} 
              category={cat} 
              apps={APPS.filter(a => a.category === cat.id)} 
            />
          ))}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-animate {
          background: linear-gradient(-45deg, #f8fafc, #f1f5f9, #eef2ff, #f5f3ff);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        .dark .bg-animate {
          background: linear-gradient(-45deg, #020617, #0f172a, #1e1b4b, #020617);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @font-face {
          font-family: 'Inter';
          src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
      `}} />
    </div>
  );
}
