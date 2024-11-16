import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Kinetic Wave",
      description: "An interactive installation that responds to viewer movement, creating wave-like patterns through mechanical elements.",
      imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      projectUrl: "#"
    },
    {
      title: "Light Symphony",
      description: "A dynamic light sculpture that creates patterns based on ambient sound, transforming audio into visual art.",
      imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      projectUrl: "#"
    },
    {
      title: "Mechanical Garden",
      description: "A series of nature-inspired kinetic sculptures that mimic plant growth and movement.",
      imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      projectUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a collection of kinetic art installations that blend technology, 
            movement, and artistic expression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;