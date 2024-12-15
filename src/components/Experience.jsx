import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Banaras Locomotive Works (BLW)',
      duration: 'July 2024 - August 2024',
      image: '/images/blw.jpeg',
      description: [
        'Led technical assessments and maintenance of 132kV substation systems',
        'Implemented SCADA monitoring solutions for real-time system analysis',
        'Collaborated with cross-functional teams on locomotive engine testing',
        'Gained expertise in traction equipment assembly and quality control',
        'Participated in modernization initiatives for electrical systems',
        'Conducted safety audits and compliance checks for high-voltage operations'
      ]
    },
    {
      company: 'Uttar Pradesh Power Transmission Corporation Limited',
      duration: 'May 2024 - June 2024',
      image: '/images/upptcl.jpeg',
      description: [
        'Managed operations at 220kV substation with focus on system reliability',
        'Developed expertise in power system protection and control mechanisms',
        'Conducted grid stability assessments and performance optimization',
        'Assisted in implementing preventive maintenance schedules',
        'Participated in emergency response planning and execution',
        'Documented technical procedures and safety protocols'
      ]
    },
    {
      company: 'North Eastern Railway, Gorakhpur',
      duration: 'June 2023 - August 2023',
      image: '/images/ner.jpg',
      description: [
        'Specialized in RMPU maintenance for railway AC coaches',
        'Implemented diagnostic procedures for HVAC system optimization',
        'Developed preventive maintenance schedules for critical systems',
        'Reduced system downtime through efficient troubleshooting',
        'Collaborated with senior technicians on complex repairs',
        'Created technical documentation for maintenance procedures'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.duration}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Experience;