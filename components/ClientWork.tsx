'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ClientWork = () => {
  const clients = [
    {
      name: 'National HR Foundation',
      url: 'https://www.nationalhrfoundation.org',
      type: 'Corporate Website',
      description: 'Professional HR foundation website with resources and networking',
      color: 'from-blue-500 to-blue-600',
      initials: 'NHF',
    },
    {
      name: 'Strawberry Artistry',
      url: 'https://www.strawberryartistry.in',
      type: 'Portfolio Site',
      description: 'Creative portfolio showcasing artistic work and projects',
      color: 'from-pink-500 to-rose-600',
      initials: 'SA',
    },
    {
      name: 'Khans Events',
      url: 'https://www.khansevents.com',
      type: 'Event Management',
      description: 'Event management and planning platform for corporate events',
      color: 'from-purple-500 to-violet-600',
      initials: 'KE',
    },
    {
      name: 'MindGroove Academy',
      url: 'https://www.mindgrooveacademy.in',
      type: 'Educational Platform',
      description: 'Online learning platform with courses and resources',
      color: 'from-emerald-500 to-teal-600',
      initials: 'MG',
    },
    {
      name: 'Rakesh Kannan Photography',
      url: 'https://rakeshkannan-photography.vercel.app',
      type: 'Photography Portfolio',
      description: 'Professional photography portfolio with gallery showcase',
      color: 'from-orange-500 to-amber-600',
      initials: 'RK',
    },
    {
      name: 'Finzura Next Gen Global',
      url: 'https://www.finzuranextgenglobal.com',
      type: 'Corporate Website',
      description: 'Professional corporate website for global services',
      color: 'from-cyan-500 to-cyan-600',
      initials: 'FNG',
    },
    {
      name: 'YRS Gas Pipeline Installation',
      url: 'https://www.yrsgaspipelineinstallation.com/',
      type: 'Industrial Services',
      description: 'Professional website for gas pipeline installation services',
      color: 'from-red-500 to-red-600',
      initials: 'YRS',
    },
    {
      name: 'Safe and Study Academy',
      url: 'https://www.safeandstudyacademy.in/',
      type: 'Educational Platform',
      description: 'Online educational platform for students and learners',
      color: 'from-green-500 to-green-600',
      initials: 'SSA',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="clients" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                Client Work Showcase
              </h2>
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-foreground/80 max-w-2xl"
            >
              Delivered 30+ professional websites for diverse clients across industries. Each project showcases expertise in design, development, and optimization.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { label: 'Projects', value: '30+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Industries', value: '15+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/30 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Clients Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <div className="relative h-full p-4 sm:p-6 rounded-xl border border-primary/30 hover:border-primary/60 bg-background transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Gradient Background Accent */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-primary transition-opacity duration-300" />

                  {/* Avatar Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0"
                  >
                    <span className="text-base sm:text-xl font-bold text-white">
                      {client.initials}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                      {client.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-3 font-medium">
                      {client.type}
                    </p>

                    <p className="text-xs text-foreground/50 flex-1 mb-3 sm:mb-4 line-clamp-2">
                      {client.description}
                    </p>

                    {/* Link Indicator */}
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs sm:text-sm font-semibold">Visit</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Want to see more?
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-4">
              These are a few highlighted projects. I&apos;ve successfully delivered 30+ complete web solutions across diverse industries with 100% client satisfaction.
            </p>
            <p className="text-xs sm:text-sm text-primary font-semibold">
              Click on any project to visit the live website
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientWork
