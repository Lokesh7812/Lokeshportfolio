'use client'

import { motion } from 'framer-motion'
import { Code2, Layout, Server, Wrench, Lightbulb, Zap } from 'lucide-react'

const Skills = () => {
  const bentoItems = [
    {
      title: 'Frontend Architecture',
      icon: <Layout className="w-6 h-6 text-pink-500" />,
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Bootstrap', 'Material UI'],
      className: 'md:col-span-2 md:row-span-1',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderGlow: 'group-hover:border-pink-500/50'
    },
    {
      title: 'Backend Systems',
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
      className: 'md:col-span-1 md:row-span-2',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      borderGlow: 'group-hover:border-emerald-500/50'
    },
    {
      title: 'Core Languages',
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      skills: ['JavaScript', 'Java', 'HTML5', 'CSS3'],
      className: 'md:col-span-1 md:row-span-1',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderGlow: 'group-hover:border-blue-500/50'
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench className="w-6 h-6 text-purple-500" />,
      skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'GoDaddy', 'Postman'],
      className: 'md:col-span-1 md:row-span-1',
      bgGradient: 'from-purple-500/10 to-violet-500/10',
      borderGlow: 'group-hover:border-purple-500/50'
    },
    {
      title: 'Computer Science & Concepts',
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      skills: ['Object-Oriented Programming', 'DBMS', 'Data Structures', 'System Architecture', 'SEO Optimization'],
      className: 'md:col-span-3 lg:col-span-3',
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      borderGlow: 'group-hover:border-amber-500/50'
    }
  ]

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
           className="mb-16 sm:mb-20 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
             <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arsenal</span>
             </h2>
          </div>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl font-medium mx-auto sm:mx-0">
            A curated ecosystem of technologies I use to build scalable, high-performance digital experiences. Moving beyond just code to full-stack problem solving.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {bentoItems.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
               viewport={{ once: true }}
               className={`group relative rounded-[2rem] p-6 sm:p-8 border border-primary/10 bg-background/50 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${item.className} ${item.borderGlow}`}
             >
                {/* Dynamic Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating Glow blob */}
                <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-[40px] group-hover:bg-primary/40 transition-colors duration-500" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6">
                    <div className="p-2 sm:p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{item.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl bg-foreground/5 text-foreground/80 border border-foreground/10 hover:bg-foreground/10 cursor-default hover:text-foreground transition-colors duration-300 backdrop-blur-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
