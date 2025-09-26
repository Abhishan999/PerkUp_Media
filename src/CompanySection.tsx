import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function CompanySection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "We are building the future, one innovation at a time. Our mission is to create technology that empowers people and transforms industries.";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-400 tracking-wide">
            Our Company
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => {
            let index = 0;
            const typeWriter = setInterval(() => {
              if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
              } else {
                clearInterval(typeWriter);
                setShowCursor(false);
              }
            }, 50);
          }}
          className="relative"
        >
          <p className="text-3xl md:text-5xl lg:text-6xl text-white leading-relaxed tracking-wide">
            {displayText}
            {showCursor && (
              <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-blue-400 ml-2 animate-pulse"></span>
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex justify-center space-x-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}