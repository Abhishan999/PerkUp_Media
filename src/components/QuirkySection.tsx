import { motion } from 'motion/react';

export function QuirkySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          hover: { duration: 0.3 }
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 rounded-3xl blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Main content container */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-12 md:p-16 border border-gray-700 shadow-2xl">
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-400 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-sm md:text-base text-cyan-400 tracking-widest uppercase">
                Something Special
              </span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            >
              We don't just build products,
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                we craft experiences
              </span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to embark on this journey with us? 
                <br />
                <span className="text-white">
                  [Insert your custom link and call-to-action here]
                </span>
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="mr-2">Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}