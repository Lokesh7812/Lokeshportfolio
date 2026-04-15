'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-foreground/90"
            >
              <p>
                I&apos;m a <span className="font-semibold text-primary">Final year Computer Science Engineering student</span> and passionate <span className="font-semibold text-primary">MERN Stack Developer</span> with hands-on experience delivering <span className="font-semibold text-primary">30+ real-world client websites</span> and scalable web applications.
              </p>

              <p>
                With specialization in <span className="font-semibold text-primary">React.js, MongoDB, and modern UI engineering</span>, I have a strong focus on performance, responsiveness, and user-centric design. I excel at converting business requirements into production-ready solutions.
              </p>

              <p>
                My journey in web development has been shaped by practical experience building everything from portfolios and business sites to complex admin dashboards and AI-powered platforms. I&apos;m deeply committed to writing clean, maintainable code and creating exceptional user experiences.
              </p>
            </motion.div>

            {/* Right Column - Contact Info & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Get in Touch</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="tel:+918056052603"
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all hover:bg-primary/20"
                  >
                    <span className="text-base sm:text-lg">📞</span>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Phone</div>
                      <div className="font-semibold text-sm sm:text-base">+91 80560 52603</div>
                    </div>
                  </a>

                  <a
                    href="mailto:teclancwebsolutions@gmail.com"
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all hover:bg-primary/20"
                  >
                    <span className="text-base sm:text-lg">📧</span>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold text-sm sm:text-base truncate">teclancwebsolutions@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lokesh-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all hover:bg-primary/20"
                  >
                    <span className="text-base sm:text-lg">💼</span>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">LinkedIn</div>
                      <div className="font-semibold text-sm sm:text-base">Lokesh S</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3 sm:p-4 rounded-lg bg-accent/10 border border-accent/30">
                <div className="flex items-start gap-3">
                  <span className="text-base sm:text-lg mt-0.5">📍</span>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Chennai, India</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
