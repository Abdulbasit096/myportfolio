'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience, leadership } from '../../data/portfolio';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building impactful solutions across healthcare, AI, and fintech domains
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
                <BriefcaseIcon className="h-6 w-6 text-primary-600" />
                <span>Professional Experience</span>
              </h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6 relative"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {exp.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
                <AcademicCapIcon className="h-6 w-6 text-primary-600" />
                <span>Leadership</span>
              </h3>
              
              <div className="space-y-8">
                {leadership.map((lead, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {lead.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {lead.organization}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                        {lead.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {lead.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}