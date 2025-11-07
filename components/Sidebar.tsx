
import React from 'react';
import type { Chapter, ChapterPart } from '../types';

interface SidebarProps {
  chapters: ChapterPart[];
  selectedChapter: Chapter | null;
  onSelectChapter: (chapter: Chapter) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 3.993A1 1 0 0 1 3 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.993ZM5 12V10h10v2H5Zm0 4V14h10v2H5Zm0-8V6h10v2H5Z"></path>
    <path d="M20 18.125V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-.025Z"></path>
  </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ chapters, selectedChapter, onSelectChapter, isOpen, setIsOpen }) => {
  
  const sidebarContent = (
      <div className="flex flex-col h-full bg-white dark:bg-slate-800">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <img src="logo-color (2).png" alt="Logo" className="h-8 w-8" />
            <div>
              <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">The Lean Startup</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Chapter Summaries</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-4">
          {chapters.map((part) => (
            <div key={part.part}>
              <h2 className="px-3 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {part.part}
              </h2>
              <ul className="space-y-1">
                {part.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => onSelectChapter(chapter)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 flex items-center justify-between ${
                        selectedChapter?.id === chapter.id
                          ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-200 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium'
                      }`}
                    >
                      <span>{chapter.title}</span>
                       {selectedChapter?.id === chapter.id && (
                        <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            AI summaries by Gemini
          </p>
        </div>
      </div>
  );

  return (
    <>
      {/* Mobile sidebar with overlay */}
      <div className={`fixed inset-0 z-30 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        {/* Sidebar */}
        <div className={`relative w-4/5 max-w-xs h-full transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block md:w-64 lg:w-72 md:flex-shrink-0">
        <div className="fixed top-0 left-0 h-full w-64 lg:w-72 border-r border-slate-200 dark:border-slate-700">
          {sidebarContent}
        </div>
      </aside>
       <div className="hidden md:block md:w-64 lg:w-72 md:flex-shrink-0"></div>
    </>
  );
};
