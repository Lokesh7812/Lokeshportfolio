'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Keyan Technologies',
      period: 'Jun 2025 – Jul 2025',
      description: 'Built admin dashboards using React, Vite, Material UI with reusable components and agile workflow.',
      highlights: [
        'Developed modular React components',
        'Implemented Material UI design system',
        'Worked with Vite for optimized builds',
        'Collaborated in agile environment',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Freelance Client Projects',
      period: 'Jan 2023 – Sept 2025',
      description: 'Delivered 30+ client websites including portfolios, business sites, and landing pages with SEO and performance optimization.',
      highlights: [
        'Built 30+ production websites',
        'Implemented SEO best practices',
        'Optimized performance and loading times',
        'Managed client relationships',
        'Deployed on Vercel and GoDaddy',
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border/50">
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
              Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-6 sm:space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 lg:left-auto top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-background lg:hidden" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
              >
                {/* Timeline Dot for Mobile */}
                <div className="lg:hidden absolute left-0 top-6 sm:top-8 w-8 h-8 bg-background border-4 border-primary rounded-full" />

                {/* Content */}
                <div
                  className={`ml-12 sm:ml-14 lg:ml-0 space-y-2 sm:space-y-4 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-block"
                  >
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm bg-primary/20 text-primary rounded-full border border-primary/30 font-medium">
                      {exp.period}
                    </span>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-primary">
                    {exp.company}
                  </p>

                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span className="text-foreground/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50"
                >
                  <div className="space-y-4">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/30">
                        {index === 0 ? '📊' : '💼'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/60 text-center">
                      {index === 0 ? 'Building dashboards' : 'Delivering solutions'}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
