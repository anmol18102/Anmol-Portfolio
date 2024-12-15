import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800 py-20 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src="/images/Anmol.jpeg"
                    alt="Anmol Kumar Maurya"
                    className="w-60 h-61 rounded-full mx-auto shadow-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>📱 +91 6388356155</li>
                      <li>📧 sachinanmol73@gmail.com</li>
                      <li>
                        <a href="https://github.com/anmol18102" className="text-blue-600 dark:text-blue-400 hover:underline">
                          GitHub Profile
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/anmol-kumar-maurya-31bb2a275/" className="text-blue-600 dark:text-blue-400 hover:underline">
                          LinkedIn Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Professional Summary</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    As an Electrical Engineering student at MMMUT, Gorakhpur, I bring a unique blend of theoretical knowledge
                    and practical experience in power systems and electrical infrastructure. Through my internships at prestigious
                    organizations like BLW and UPPTCL, I've gained hands-on experience with high-voltage systems, SCADA operations,
                    and industrial electrical maintenance.<br/>
                    Member of ICETIGT-2024 International conference on Sustainable Energy and Green Technology <br/>
                    Member of Bureau of Indian Standards MMMUT Gorakhpur                                                                          
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm particularly passionate about sustainable energy solutions and electric vehicle technology, as demonstrated
                    through my project on regenerative braking systems. My strong academic performance, coupled with practical
                    experience, positions me well for contributing to the future of electrical engineering and renewable energy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;