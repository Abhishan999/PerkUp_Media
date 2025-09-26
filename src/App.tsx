import { useEffect } from 'react';
import { FoundersSection } from './components/FoundersSection';
import { CompanySection } from './components/CompanySection';
import { QuirkySection } from './components/QuirkySection';

export default function App() {
  useEffect(() => {
    // Apply dark theme
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Hero/Landing Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets excellence, and dreams become reality
          </p>
          
          <div className="flex justify-center">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <FoundersSection />
      <CompanySection />
      <QuirkySection />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Our Company. Building the future together.
          </p>
        </div>
      </footer>
    </div>
  );
}