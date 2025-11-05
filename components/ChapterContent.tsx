
import React from 'react';
import type { Chapter } from '../types';

interface ChapterContentProps {
  chapter: Chapter | null;
  summary: string;
  language: 'en' | 'am';
  onLanguageToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX/////AAD/zMz/4eH/8PD/9PT/tLT/xsb/1NT/p6f/ysr/7e3/oqL/5ub/nJz/goL/3d3/l5f/rq7/ZmZ/a2v/iIj/f39/Kir/UFD/OTl/Ly9/Pz9/SEh/Hh5/DQ3/vr5/c3P/VFR+y909AAAD9ElFTVR4nO2d23qiMBCGMzAEUbriBcVXvP/b3EDoXRIJ0rSW7E73/WCeCQ8CaU56vV4AAAAAAAAAAAAAAAAAAAAAAAAAAMC/R8x+nYx8bFt1b28n31l2l93dWc/Ne/ZbJqI/R8x+r4lY75x28MvHTz6aN++7u7NNR6z3MyaR6/j8+bx/6xpr7cWrP0fMft1k4j10y+FXTz7atG9vV5OOWe/nmETu6Tfn8/7tY2xtvfrp5+j5j9nxj4hn7/jJhzP27e1q0zFrfT9jErlh377uQ0ytvfz0c/T8x+z4h4hn7/jJhzP27e1q0zFrfT9jErlh377uQ0ytvfz0c/T8x+z4h4hn7/jJhzP27e1q0zFrfT9jErlh377uQ0ytvfz0c/T8x+z4h4hn7/jJhzP27e1q0zFrfT9jErlh377uQ0ytvfz085fP/L7Y+C8Rz97xkw9n7Nvb1abD1vN9jEzkjp1s8g8xtfbw489fP/L7Y+O/RDx7x08+nLNvb1ebDlvP9zEykTt2ssg/xNTaA48/fvkP0uMfs+MfsZ+94ycftrBvb1ebDlvP9zEykTt2ssg/xNTaA48/fvkP0uMfs+MfsZ+94ycftrBvb1ebDlvP9zEykTt2ssg/xNTaA48/fvkP0uMfs+MfsZ+94ycftrBvb1ebDlvP9zEykTt2ssg/xNTaA48/fvkP0uMfs+MfsZ+94ycftrBvb1ebDlvP9zEykTt2ssg/xNTaA48/fvk/j158Y8c/Yj97x08+bGHf3q42HbbW72Mykbt2sugHxNSaA48/fvnvxqM3bvyXmM/e8ZMPW9i3t6tNhy31expM5I6dbPIPMbX28OPHXz7y+2PjvyQ8e8dPPpxh396uNh22nu9jYiJ37GSRf4iptefx45e/IB7/mB3/iP3sHT/5sIV9e7vatNh6vp+Jidixk0X+IabWnn/88hfE4x+z4x+xn73jJx+2sG9vV5sOW8/3MTERO3ayyD/E1Frzjz9++QvisY/Z8Y/Yz97xk/8/tW9vV5sOW8/3MTERO3ayyD/E1Frzjz9++QvisY/Z8Y/Yz97xk/8/tW9vV5sOW8/3MTERO3ayyD/E1Frzjz9++QvisY/Z8Y/Yz97xk/8/tW9vV5sOW8/3MTERO3ayyD/E1Nrzz18+8vtj479EPPvGTz6cYd/erjYdtp7vY2Iid+xkkX+IqTXn/OUn0eMfs+MfsZ+94ycftrBvb1ebDlvP9zEykTt2ssg/xNTa859/fvk98fhH7PjH7Gfv+MmHLexbVzctNh2j3vdjIpG7dnaZf4iptef/38tfX49/zI5/xH72jp982MK+dd3csulY9b5fE4nc0bPL/ENMrT3//OWX1+Mfs+MfsZ+94ycftrBvXde2LDYdo97/YzKRu3Z2mX+IqTXn/+WX3xKPf8yOf8R+9o6ffNjCvnXd3LLpWNW+XxOJ3NGzy/xDTK09//zl19fjH7PjH7GfveMnH7awb13Xtiw2HaPe/2Mykbt2dpl/iKk15//ll98Sj3/Mjn/EfvbdXbec3RjzV+Xz1e7y/e6ueS22AAAAAAAAAAAAAAAAAAAAAAAAAAAAgD/kLwz1/xVhfOTmAAAAAElFTVRSuQmCC";

const WelcomeMessage: React.FC = () => {
  const handleStartReading = () => {
    // Get the first chapter ID from the chapter structure
    const firstChapterId = 'ch1'; // First chapter after introduction
    
    // Update the URL hash to trigger navigation
    window.location.hash = `#${firstChapterId}`;
    
    // Force a reload of the chapter content
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    
    // Smooth scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 sm:mb-6">
          The Lean Startup
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
          How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses
        </p>
        
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-300 mb-8 sm:mb-10">
          by Eric Ries
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button
            onClick={handleStartReading}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-base sm:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Start Reading
          </button>
          
          <a 
            href="#intro" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg text-base sm:text-lg transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'intro';
              window.dispatchEvent(new HashChangeEvent('hashchange'));
            }}
          >
            Read Introduction
          </a>
        </div>
        
        <p className="mt-8 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Or select a chapter from the menu
        </p>
      </div>
    </div>
  );
};

const TranslateIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
);

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);
  
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, summary, language, onLanguageToggle, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!chapter) {
    return <WelcomeMessage />;
  }

  return (
    <div className="max-w-4xl mx-auto h-full">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 sm:p-8 relative">
        {summary && (
          <>
            <article className="prose prose-slate dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:text-slate-800 dark:prose-headings:text-slate-100">
              <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl !mb-4">{chapter.title}</h1>
                  <button 
                      onClick={onLanguageToggle}
                      className="flex items-center space-x-2 -mt-2 -mr-2 sm:mt-0 sm:mr-0 ml-4 px-3 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors"
                      aria-label={language === 'en' ? 'Translate to Amharic' : 'View in English'}
                  >
                      <TranslateIcon className="h-5 w-5" />
                      <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
                  </button>
              </div>
              <div className={`text-lg text-slate-600 dark:text-slate-300 space-y-4 ${language === 'am' ? 'font-noto-serif-ethiopian' : ''}`}>
                {summary.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            <nav className="mt-8 flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-6">
                <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                aria-label="Previous Chapter"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span>Previous</span>
                </button>
                <button
                onClick={onNext}
                disabled={!hasNext}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                aria-label="Next Chapter"
                >
                    <span>Next</span>
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};
