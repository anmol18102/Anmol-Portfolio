import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certificates = [
    {
      title: 'Design of Electric Motor',
      issuer: 'NPTEL',
      score: '52% Elite',
      description:
        'Comprehensive course covering electric motor design principles, electromagnetic theory, and practical applications in modern electrical systems.',
      skills: ['Motor Design', 'Electromagnetic Theory', 'Power Systems'],
      image: '/images/electric-motor.jpg',
      certi_url:
        'https://drive.google.com/file/d/1d75iUIVBH5_Uxbq1-m7zU0l-VY3kXTFE/view?usp=drive_link',
    },
    {
      title: 'Fuzzy Sets and Logic',
      issuer: 'NPTEL',
      score: '93% (Top 5% in India)',
      description:
        'Advanced course on fuzzy logic systems, covering mathematical foundations, fuzzy inference systems, and applications in control systems.',
      skills: ['Fuzzy Logic', 'Control Systems', 'Mathematical Modeling'],
      image: '/images/fuzzy-set.jpg',
      certi_url:
        'https://drive.google.com/file/d/1pBH1Wtdu1PkWrHKf7m5NqrCN8CSYOSrQ/view?usp=drive_link',
    },
    {
      title: 'Solar Energy Engineering and Technology',
      issuer: 'NPTEL',
      score: '61% Elite',
      description:
        'In-depth study of solar energy systems, photovoltaic technology, and renewable energy integration into power grids.',
      skills: ['Solar Technology', 'Renewable Energy', 'Power Systems'],
      image: '/images/solar-energy.jpg',
      certi_url:
        'https://drive.google.com/file/d/1aUgVmmPIJmTQu1CloUyWRatszQxNm36T/view?usp=drive_link',
    },
    {
      title: 'C++ Programming',
      issuer: 'Coding Ninjas',

      description:
        'Comprehensive programming course covering object-oriented programming, data structures, and algorithm design in C++.',
      skills: ['C++', 'Data Structures', 'Algorithms'],
      image: '/images/cpp-programming.jpg',
      certi_url:
        'https://drive.google.com/file/d/1YkiBqDJRWrGys300AHHFmHHyY6YWXUYI/view?usp=drive_link',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Certifications
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <a href={cert.certi_url}>
                    {' '}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Issued by {cert.issuer}
                  </p>
                  {cert.score && (
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                      Score: {cert.score}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
