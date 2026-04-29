'use client'

import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Web Application Automation Testing using Selenium (Java)',
      description: 'A comprehensive automation testing framework built to ensure the reliability and functionality of web applications.',
      status: 'Completed',
      technologies: ['Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'POM Architecture'],
      features: [
        'Developed automated test scripts using Selenium WebDriver with Java for functional testing.',
        'Designed scalable test architecture using Page Object Model (POM).',
        'Automated critical workflows like login, form validation, navigation, and UI verification.',
        'Used TestNG for execution, assertions, and reporting.',
        'Integrated Maven for dependency management and build automation.'
      ],
      emoji: '⚙️',
    },
    {
      title: 'Teclanc.ai — AI-Driven Website Builder',
      description: 'An AI-assisted platform for prompt-based website generation designed to help beginners learn web development practically with an education-first approach.',
      status: 'Completed',
      technologies: ['Node.js', 'REST APIs', 'MySQL', 'JWT', 'HTML/CSS/JS', 'Algorithms'],
      features: [
        'Enabled AI generation of HTML, CSS, and JavaScript with editable source code for experimentation and learning.',
        'Implemented live responsive preview, in-browser code editor, and downloadable source files for hands-on practice.',
        'Developed secure JWT-based authentication and stored prompt/project history in a MySQL database.',
        'Designed a client–server architecture using Node.js and REST APIs with an education-first approach.',
        'Applied core CS concepts including DBMS, computer networks, information security, and algorithms.'
      ],
      emoji: '🤖',
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </motion.h2>
            <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-primary rounded-full" />
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group rounded-2xl overflow-hidden bg-primary/5 border border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                {/* Card Header with Icon */}
                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl sm:text-5xl">{project.emoji}</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full border ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-600 border-green-500/30'
                          : project.status === 'Ongoing'
                          ? 'bg-blue-500/20 text-blue-600 border-blue-500/30'
                          : 'bg-amber-500/20 text-amber-600 border-amber-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-primary">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs sm:text-sm text-foreground/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 sm:pt-4 border-t border-border/50">
                    <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects
