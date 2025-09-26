import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FoundersSection() {
  const founders = [
    {
      name: "Founder 1",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4ODU5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Passionate entrepreneur with a vision for innovation. Over 10 years of experience leading technology teams and building scalable solutions that make a real impact."
    },
    {
      name: "Co-Founder",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4ODMyNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Creative strategist and product visionary. Specializes in user experience design and building products that users love. Dedicated to creating meaningful connections."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meet the Founders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center"
            >
              <div className="relative mb-8 mx-auto w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-background rounded-full p-2">
                    <ImageWithFallback
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-pulse"></div>
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl mb-6 text-white"
              >
                {founder.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto"
              >
                {founder.bio}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}