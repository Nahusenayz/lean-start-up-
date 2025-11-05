
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChapterContent } from './components/ChapterContent';
import { chapterStructure } from './constants';
import type { Chapter } from './types';
import { getChapterSummary } from './services/geminiService';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'am'>('en');

  const allChapters = useMemo(() => chapterStructure.flatMap(part => part.chapters), []);
  const currentIndex = useMemo(() => {
    if (!selectedChapter) return -1;
    return allChapters.findIndex(c => c.id === selectedChapter.id);
  }, [selectedChapter, allChapters]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allChapters.length - 1 && currentIndex !== -1;

  const updateSummary = useCallback((chapter: Chapter | null, lang: 'en' | 'am') => {
    if (!chapter) {
      setSummary('');
      return;
    }
    const chapterSummary = getChapterSummary(chapter.id, lang);
    setSummary(chapterSummary);
  }, []);


  useEffect(() => {
    if (selectedChapter) {
      updateSummary(selectedChapter, language);
    }
  }, [selectedChapter, language, updateSummary]);

  // Sync selected chapter with URL hash on load and when hash changes
  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash?.replace('#', '');
      if (!id) return;
      const match = allChapters.find(c => c.id === id);
      if (match) {
        setSelectedChapter(prev => (prev?.id === match.id ? prev : match));
      }
    };
    // Apply on mount
    applyHash();
    // Listen for changes
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [allChapters]);
  
  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setLanguage('en'); // Reset to English on new chapter selection
    setIsSidebarOpen(false); // Close sidebar on mobile after selection

    // Keep URL in sync
    if (window.location.hash !== `#${chapter.id}`) {
      window.location.hash = `#${chapter.id}`;
    }

    // Smoothly scroll to the top of the content
    // A small timeout allows the sidebar closing animation to start, creating a smoother feel
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'en' ? 'am' : 'en');
  };

  const handlePreviousChapter = () => {
    if (hasPrevious) {
      handleSelectChapter(allChapters[currentIndex - 1]);
    }
  };

  const handleNextChapter = () => {
    if (hasNext) {
      handleSelectChapter(allChapters[currentIndex + 1]);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="flex-1 md:flex">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <img src="logo-color (2).png" alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-sky-600 dark:text-sky-400">The Lean Startup</h1>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        <Sidebar 
          chapters={chapterStructure} 
          selectedChapter={selectedChapter} 
          onSelectChapter={handleSelectChapter}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 transition-all duration-300">
          <ChapterContent
            chapter={selectedChapter}
            summary={summary}
            language={language}
            onLanguageToggle={handleLanguageToggle}
            onPrevious={handlePreviousChapter}
            onNext={handleNextChapter}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            onOpenMenu={() => setIsSidebarOpen(true)}
          />
        </main>
      </div>
      
      <footer className="w-full p-4 text-center bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <a
          href="https://www.techspaceet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          Powered by - Tech Space ET
        </a>
      </footer>
    </div>
  );
};

export default App;
