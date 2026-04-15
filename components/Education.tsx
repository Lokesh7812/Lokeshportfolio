'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border/50">
      <div className="max-w-4xl mx-auto">
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
              Education
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 sm:p-8 rounded-2xl bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="p-4 sm:p-6 rounded-xl bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all"
              >
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    B.E. Computer Science and Engineering
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-primary mt-1 sm:mt-2">
                    Tagore Engineering College, Chennai
                  </p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6 border-y border-border/30">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-foreground/60">Status</p>
                    <p className="text-base sm:text-lg font-bold text-foreground">Final Year</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-foreground/60">CGPA</p>
                    <p className="text-base sm:text-lg font-bold text-primary">8.75</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-foreground/60">Location</p>
                    <p className="text-base sm:text-lg font-bold text-foreground">Chennai</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <p className="text-xs sm:text-sm font-semibold text-primary">Academic Highlights:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      '✓ Consistent Top Performer',
                      '✓ 100% Attendance (6 semesters)',
                      '✓ Active in Technical Clubs',
                      '✓ Paper Presentation Winner',
                      '✓ Hackathon Participant',
                      '✓ Leadership Roles',
                    ].map((highlight, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm text-foreground/80 font-medium"
                      >
                        {highlight}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
          >
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Beyond formal education, I continuously upskill through real-world projects, online courses, and practical development experience. My learning approach combines theoretical knowledge with hands-on problem-solving.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
