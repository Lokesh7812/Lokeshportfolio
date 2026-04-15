'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const ClientWork = () => {
  const clients = [
    {
      name: 'National HR Foundation',
      url: 'https://www.nationalhrfoundation.org',
      type: 'Corporate Website',
      icon: '🏢',
    },
    {
      name: 'Strawberry Artistry',
      url: 'https://www.strawberryartistry.in',
      type: 'Portfolio Site',
      icon: '🎨',
    },
    {
      name: 'Khans Events',
      url: 'https://www.khansevents.com',
      type: 'Event Management',
      icon: '🎉',
    },
    {
      name: 'MindGroove Academy',
      url: 'https://www.mindgrooveacademy.in',
      type: 'Educational Platform',
      icon: '📚',
    },
    {
      name: 'Rakesh Kannan Photography',
      url: 'https://rakeshkannan-photography.vercel.app',
      type: 'Photography Portfolio',
      icon: '📸',
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
    <section id="clients" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border/50">
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
              Client Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Showcase</span>
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 text-center"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">30+</div>
            <div className="text-sm sm:text-base text-foreground/70 mt-1">Live Client Projects Delivered</div>
          </motion.div>

          {/* Clients Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(147, 112, 219, 0.15)' }}
                className="group p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">{client.icon}</div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1 sm:mb-2 line-clamp-2">
                  {client.name}
                </h3>

                <p className="text-xs sm:text-sm text-foreground/70">
                  {client.type}
                </p>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-primary font-semibold truncate">Visit Website →</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Featured Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-r from-accent/5 to-primary/5 border border-border/50"
          >
            <p className="text-xs sm:text-sm text-foreground/70">
              <span className="font-semibold text-primary">★ Showcasing a sample</span> of 30+ successful client projects delivered with excellent results and 100% client satisfaction
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientWork
