import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech (Electrical Engineering)',
      year: '2021 - Ongoing',
      institution: 'MMMUT, Gorakhpur',
      score: 'CGPA: 7.39/10.0',
      image: '/images/mmmut.jpg'
    },
    {
      degree: 'Class XII (CBSE)',
      year: '2020',
      institution: 'Jawahar Navodaya Vidyalaya, Mirzapur',
      score: 'Percentage: 83.8%',
      image: '/images/jnv.jpeg'
    },
    {
      degree: 'Class X (CBSE)',
      year: '2018',
      institution: 'Jawahar Navodaya Vidyalaya, Mirzapur',
      score: 'Percentage: 84.2%',
      image: '/images/jnv.jpeg'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-3 gap-4 p-6">
                <div className="md:col-span-1">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between mt-4">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.year}
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;