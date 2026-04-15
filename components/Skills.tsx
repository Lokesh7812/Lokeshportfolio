'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'Java', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'GoDaddy'],
    },
    {
      category: 'Core Concepts',
      skills: ['OOP', 'DBMS', 'Data Structures', 'REST APIs', 'SEO'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-2 sm:space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              My Skills
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(147, 112, 219, 0.1)' }}
                className="p-4 sm:p-6 rounded-xl bg-primary/5 border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
              >
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary group-hover:text-accent transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 hover:border-primary/60 transition-all duration-200 font-medium cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Visual Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-primary/10 border border-primary/30 space-y-4 sm:space-y-6"
          >
            <h3 className="text-lg sm:text-xl font-bold">Expertise Areas</h3>
            {[
              { label: 'Full Stack Development', percentage: 95 },
              { label: 'React & Frontend Frameworks', percentage: 90 },
              { label: 'Backend & Database Design', percentage: 85 },
              { label: 'Responsive Web Design', percentage: 95 },
              { label: 'UI/UX Implementation', percentage: 88 },
            ].map((expertise, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-medium">{expertise.label}</span>
                  <span className="text-primary font-bold">{expertise.percentage}%</span>
                </div>
                <div className="w-full bg-background border border-border/50 rounded-full h-2 sm:h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${expertise.percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
