import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 6388356155',
      link: 'tel:+916388356155'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'sachinanmol73@gmail.com',
      link: 'mailto:sachinanmol73@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/anmol-kumar-maurya-31bb2a275/'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/anmol18102'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center group"
                      >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                          {info.icon}
                        </span>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.label}
                          </p>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                    Location
                  </h3>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                    <p className="text-gray-700 dark:text-gray-300">
                      Mirzapur<br />
                      Uttar Pradesh, India
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Available for:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="mr-2">•</span>
                          Remote Work
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="mr-2">•</span>
                          Relocation
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="mr-2">•</span>
                          On-site Opportunities
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;