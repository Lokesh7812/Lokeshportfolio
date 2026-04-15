'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Keyan Technologies',
      period: 'Jun 2025 – Jul 2025',
      duration: '2 months',
      description: 'Built admin dashboards using React, Vite, Material UI with reusable components and agile workflow.',
      responsibilities: [
        'Developed modular React components for enterprise dashboard',
        'Implemented Material UI design system with custom theming',
        'Optimized builds with Vite achieving 40% faster load times',
        'Collaborated in 2-week agile sprints with team',
        'Conducted code reviews and best practices documentation',
      ],
      icon: '💼',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2023 – Present',
      duration: '2+ years',
      description: 'Delivered 30+ production websites for diverse clients including startups, businesses, and agencies.',
      responsibilities: [
        'Designed and built 30+ fully responsive websites',
        'Implemented SEO optimization (Meta tags, structured data, sitemap)',
        'Optimized performance achieving 90+ Lighthouse scores',
        'Managed end-to-end project lifecycle from design to deployment',
        'Maintained and supported deployed applications on Vercel',
      ],
      icon: '🚀',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/20">
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
              Work Experience
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
          </div>

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-background border border-primary/30 hover:border-primary/60 transition-all duration-300 h-full"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6 h-full flex flex-col">
                  {/* Top Section */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform">{exp.icon}</div>
                      <div className="text-right">
                        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm bg-primary/20 text-primary rounded-full border border-primary/30 font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Job Title & Company */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>

                    {/* Period */}
                    <p className="text-xs sm:text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {exp.period}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="flex-1 space-y-3 border-t border-primary/20 pt-6">
                    <p className="text-xs sm:text-sm font-semibold text-primary">Key Responsibilities:</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-xs sm:text-sm text-foreground/70 flex items-start gap-2"
                        >
                          <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
