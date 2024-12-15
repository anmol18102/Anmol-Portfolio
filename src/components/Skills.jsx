import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const technicalSkills = [
    { name: 'C++', level: 90, icon: '💻' },
    { name: 'HTML', level: 85, icon: '🌐' },
    { name: 'CSS', level: 80, icon: '🎨' },
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'React JS', level: 70, icon: '⚛️' },
    { name: 'Tailwind', level: 85, icon: '🎯' },
    { name: 'MongoDB', level: 65, icon: '🗄️' },
    { name: 'Node.js', level: 60, icon: '🚀' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95, icon: '🧩' },
    { name: 'Leadership', level: 85, icon: '👥' },
    { name: 'Teamwork', level: 90, icon: '🤝' },
    { name: 'Decision Making', level: 85, icon: '⚖️' },
    { name: 'Time Management', level: 80, icon: '⏰' },
    { name: 'Communication', level: 85, icon: '💬' }
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
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{skill.icon}</span>
          <span className="text-gray-800 dark:text-white font-medium">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;