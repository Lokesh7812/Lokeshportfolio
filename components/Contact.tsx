'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      title: 'Call Me',
      description: 'Direct phone contact',
      icon: Phone,
      link: 'tel:+918056052603',
      display: '+91 80560 52603',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
      textColor: 'text-blue-600',
    },
    {
      title: 'WhatsApp',
      description: 'Quick messaging',
      icon: MessageCircle,
      link: 'https://wa.me/918056052603',
      display: '+91 80560 52603',
      color: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/30 hover:border-green-500/60',
      textColor: 'text-green-600',
    },
    {
      title: 'Instagram',
      description: 'Follow for updates',
      icon: Instagram,
      link: 'https://www.instagram.com/teclanclokesh/',
      display: '@teclanclokesh',
      color: 'from-pink-500/20 to-pink-600/10',
      borderColor: 'border-pink-500/30 hover:border-pink-500/60',
      textColor: 'text-pink-600',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Title */}
          <div className="text-center space-y-2 sm:space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto"
            >
              Have a project in mind? Want to collaborate? Or just say hello? Feel free to reach out through any of these channels. I&apos;d love to hear from you!
            </motion.p>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full mx-auto" />
          </div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 sm:gap-8"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    boxShadow: '0 30px 60px rgba(147, 112, 219, 0.2)',
                  }}
                  className={`group p-6 sm:p-8 rounded-2xl bg-primary/10 border border-primary/30 transition-all duration-300 text-center relative overflow-hidden`}
                >
                  {/* Background Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity duration-300" />

                  <div className="relative z-10 space-y-4 sm:space-y-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex justify-center"
                    >
                      <div className={`p-4 sm:p-5 rounded-xl bg-primary/20 border border-primary/40`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${method.textColor}`} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {method.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        {method.description}
                      </p>
                      <p className={`text-base sm:text-lg font-bold ${method.textColor}`}>
                        {method.display}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 sm:pt-4">
                      <span className="text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors">
                        Click to connect →
                      </span>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Email Me</h3>
            <a
              href="mailto:teclancwebsolutions@gmail.com"
              className="text-primary hover:text-accent transition-colors font-semibold text-sm sm:text-base break-all"
            >
              teclancwebsolutions@gmail.com
            </a>
            <p className="text-xs sm:text-sm text-foreground/60 mt-3 sm:mt-4">
              For detailed inquiries or project discussions, email is preferred
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8"
          >
            <p className="text-sm sm:text-base text-foreground/80 font-medium">
              Ready to start your next project?
            </p>
            <a
              href="https://wa.me/918056052603"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base"
            >
              Let&apos;s Talk 💬
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
