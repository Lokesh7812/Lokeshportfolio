'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Outgoing Student Nominee',
      icon: '🌟',
      category: 'Academic',
    },
    {
      title: '1st Prize — Paper Presentation',
      subtitle: 'National Symposium',
      icon: '🏆',
      category: 'Competition',
    },
    {
      title: 'Code Contest Winner',
      icon: '💻',
      category: 'Competition',
    },
    {
      title: 'Cyber Hunt Runner-up',
      icon: '🔒',
      category: 'Competition',
    },
    {
      title: '100% Attendance',
      subtitle: '6 consecutive semesters',
      icon: '📅',
      category: 'Academic',
    },
    {
      title: 'Class Topper Award',
      icon: '📚',
      category: 'Academic',
    },
    {
      title: 'Symposium Coordinator',
      subtitle: 'Event Leadership',
      icon: '🎯',
      category: 'Leadership',
    },
    {
      title: '30+ Clients Satisfied',
      subtitle: 'Freelance Portfolio',
      icon: '⭐',
      category: 'Professional',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'from-blue-500/10 to-blue-600/5'
      case 'Competition':
        return 'from-amber-500/10 to-amber-600/5'
      case 'Leadership':
        return 'from-purple-500/10 to-purple-600/5'
      case 'Professional':
        return 'from-green-500/10 to-green-600/5'
      default:
        return 'from-primary/10 to-accent/10'
    }
  }

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'border-blue-500/30'
      case 'Competition':
        return 'border-amber-500/30'
      case 'Leadership':
        return 'border-purple-500/30'
      case 'Professional':
        return 'border-green-500/30'
      default:
        return 'border-border/50'
    }
  }

  return (
    <section id="achievements" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
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
              Achievements &amp; <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Awards</span>
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-4 sm:p-6 rounded-xl bg-gradient-to-br ${getCategoryColor(achievement.category)} border ${getCategoryBorder(achievement.category)} transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-300" />

                <div className="relative z-10 space-y-3">
                  <div className="text-3xl sm:text-4xl">{achievement.icon}</div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {achievement.title}
                    </h3>
                    {achievement.subtitle && (
                      <p className="text-xs sm:text-sm text-foreground/60 mt-1">
                        {achievement.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-border/20">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full inline-block">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              { count: '8+', label: 'Major Awards' },
              { count: '4', label: 'Competitions' },
              { count: '7', label: 'Academic Honors' },
              { count: '100%', label: 'Dedication' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-3 sm:p-4 text-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 group"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
