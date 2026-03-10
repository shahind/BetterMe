import React, { useState, useMemo } from 'react';
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
    gradient: 'from-blue-100/80 to-blue-200/40'
  },
  { 
    id: 'posefix', 
    name: 'Pose Fix', 
    description: 'AI-powered posture correction and alignment tool.',
    icon: <Sparkles className="text-amber-600" />, 
    path: '/pose-fix/', 
    category: 'fitness',
    gradient: 'from-amber-100/80 to-amber-200/40'
  },
  { 
    id: 'eq-analyzer', 
    name: 'EQ Analyzer', 
    description: 'Deep dive into your emotional intelligence patterns.',
    icon: <Brain className="text-purple-600" />, 
    path: '/eq-analyzer/', 
    category: 'mindset',
    gradient: 'from-purple-100/80 to-purple-200/40'
  },
  { 
    id: 'cyclea', 
    name: 'Cyclea', 
    description: 'Advanced period manager and cycle tracking.',
    icon: <Calendar className="text-pink-600" />, 
    path: '/cyclea/', 
    category: 'health',
    gradient: 'from-pink-100/80 to-pink-200/40'
  },
  { 
    id: 'book-guide', 
    name: 'ReadTrack', 
    description: 'Guide and tracker for your reading journey.',
    icon: <BookOpen className="text-emerald-600" />, 
    path: '/read-track/', 
    category: 'productivity',
    gradient: 'from-emerald-100/80 to-emerald-200/40'
  },
  { 
    id: 'todo', 
    name: 'Growth List', 
    description: 'Daily habits and tasks for personal development.',
    icon: <CheckSquare className="text-orange-600" />, 
    path: '/todo/', 
    category: 'productivity',
    gradient: 'from-orange-100/80 to-orange-200/40'
  },
  { 
    id: 'rel-test', 
    name: 'Connection Test', 
    description: 'Analyze and improve your relationship health.',
    icon: <Heart className="text-red-600" />, 
    path: '/rel-test/', 
    category: 'mindset',
    gradient: 'from-red-100/80 to-red-200/40'
  }
];

const AppCard = ({ app }) => {
  // Navigation logic updated to point to the root domain to match GitHub Pages structure
  const handleNavigation = () => {
    const origin = window.location.origin;
    // We navigate directly to origin + app.path (e.g., shahind.github.io/Core28/)
    // This bypasses the current /BetterMe/ sub-directory
    window.location.href = `${origin}${app.path}?from=BetterMe`;
  };

  return (
    <div 
      onClick={handleNavigation}
      className={`flex-shrink-0 w-[85%] md:w-80 bg-gradient-to-br ${app.gradient} backdrop-blur-md rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group mb-4`}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="p-4 bg-white/90 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
          {app.icon}
        </div>
        <div className="p-2.5 rounded-full bg-white/60">
          <ChevronRight className="text-slate-500 w-4 h-4" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{app.name}</h3>
      <p className="text-sm text-slate-700 leading-relaxed font-medium opacity-80">
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
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{category.name}</h2>
        <div className="h-1.5 w-10 bg-indigo-500 rounded-full mt-2 mx-auto md:mx-0 opacity-60"></div>
      </div>
      
      <div className="flex overflow-x-auto py-4 pb-8 px-8 gap-8 no-scrollbar scroll-smooth">
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
    <div className="min-h-screen bg-animate text-slate-900 selection:bg-indigo-100 transition-colors">
      <header className="fixed top-0 left-0 right-0 z-20 px-6 py-6 flex justify-end">
        <button 
          onClick={handleShare}
          className="p-3 bg-white/40 backdrop-blur-md border border-white/40 hover:bg-white/60 rounded-full transition-all text-slate-800 shadow-sm"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </header>

      <main className="max-w-6xl mx-auto pt-16 pb-20">
        <div className="px-8 mb-24 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-indigo-300 mb-8 animate-pulse-slow">
            <Sparkles className="text-white w-12 h-12" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
            BetterMe
          </h1>
          <p className="text-xl font-semibold text-slate-600 tracking-wide">
            Discover a better version of yourself.
          </p>
        </div>

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
          background: linear-gradient(-45deg, #f1f5f9, #e2e8f0, #eef2ff, #f5f3ff) !important;
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

        body { 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          overflow-x: hidden; 
          margin: 0; 
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
        }
      `}} />
    </div>
  );
}
