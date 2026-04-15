'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/Lokesh7812',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lokesh-s',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/teclanclokesh/',
      icon: Instagram,
    },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-accent/5 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Brand & About */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Lokesh S
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  MERN Stack Developer
                </p>
              </div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed max-w-sm">
                Building premium, scalable web applications with React, Node.js, and MongoDB. 30+ client projects delivered with excellence.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      className="p-2 sm:p-2.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h4 className="font-bold text-foreground mb-3 sm:mb-4">Quick Navigation</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { label: 'About', href: '#about' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Experience', href: '#experience' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Achievements', href: '#achievements' },
                    { label: 'Contact', href: '#contact' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
          >
            {/* Copyright */}
            <div className="text-center sm:text-left text-xs sm:text-sm text-foreground/60">
              <p>© {currentYear} Lokesh S. All rights reserved.</p>
              <p className="mt-1 sm:mt-2">
                Built with React, Tailwind CSS, Framer Motion & Next.js
              </p>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-xs sm:text-sm text-foreground/50 pt-4 sm:pt-6 border-t border-border/30"
          >
            <p>
              📍 Chennai, India • 📧{' '}
              <a href="mailto:teclancwebsolutions@gmail.com" className="text-primary hover:text-accent transition-colors">
                teclancwebsolutions@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
