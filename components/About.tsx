'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              About Me
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-full max-w-sm">
                {/* Decorative Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 blur-2xl" />
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <Image
                    src="/lokesh-profile.jpg"
                    alt="Lokesh S - MERN Stack Developer"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 border border-primary/30"
                    >
                      <p className="text-xs sm:text-sm font-semibold text-primary mb-1">MERN Stack Developer</p>
                      <p className="text-sm sm:text-base font-bold text-foreground">Lokesh S</p>
                      <p className="text-xs text-foreground/60 mt-1">Building exceptional web experiences</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* About Text */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-foreground/90">
                <p>
                  Final year Computer Science Engineering student and aspiring <span className="font-semibold text-primary">MERN Stack Developer & Automation Testing Enthusiast</span> with strong hands-on experience in building responsive, scalable, and client-focused web applications.
                </p>

                <p>
                  Skilled in <span className="font-semibold text-primary">React.js, MySql, MongoDB, and Selenium WebDriver</span>, with working knowledge of Node.js, Express.js, and modern testing frameworks. Delivered 30+ real-world client projects and implemented both development and automation testing practices for production-ready solutions.
                </p>

                <p>
                  Currently exploring <span className="font-semibold text-primary">Playwright</span> for next-generation test automation.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-primary/20" />

              {/* Contact & Location Section */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Connect With Me</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="tel:+918056052603"
                    className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-colors">
                      <span className="text-base sm:text-lg">📞</span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-foreground/60">Phone</div>
                      <div className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">+91 80560 52603</div>
                    </div>
                  </a>

                  <a
                    href="mailto:teclancwebsolutions@gmail.com"
                    className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-colors">
                      <span className="text-base sm:text-lg">✉</span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-foreground/60">Email</div>
                      <div className="font-semibold text-sm sm:text-base truncate group-hover:text-primary transition-colors">teclancwebsolutions@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lokesh-s-b018a424a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-colors">
                      <span className="text-base sm:text-lg">in</span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-foreground/60">LinkedIn</div>
                      <div className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">Lokesh S</div>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/30 hover:border-primary/60 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-base sm:text-lg">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Chennai, India</div>
                      <div className="text-xs sm:text-sm text-foreground/60 mt-0.5">Tamil Nadu</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
