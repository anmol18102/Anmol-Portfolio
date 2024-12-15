import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Regenerative Braking in Electric Vehicles',
      description: [
        'Developed an innovative regenerative braking system for electric vehicles',
        'Achieved up to 70% energy recovery during braking processes',
        'Implemented advanced control algorithms for optimal energy conversion',
        'Designed user interface for real-time energy recovery monitoring'
      ],
      technologies: ['Power Electronics', 'Control Systems', 'Energy Storage', 'Mechanical Design'],
      image: '/images/regenerative-braking.jpeg'
    },
    // {
    //   title: 'Smart Grid Integration System',
    //   description: [
    //     'Designed a smart grid system for efficient power distribution',
    //     'Implemented real-time monitoring and control mechanisms',
    //     'Developed algorithms for load balancing and fault detection',
    //     'Created user dashboard for system monitoring and control'
    //   ],
    //   technologies: ['SCADA', 'Power Systems', 'IoT', 'Data Analytics'],
    //   image: '/images/smart-grid.jpg'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {project.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;