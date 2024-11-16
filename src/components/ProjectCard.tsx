import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  projectUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  projectUrl,
}) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-colors duration-300"
    >
      <div className="relative group">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        {videoUrl && (
          <a 
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <Play size={48} className="text-white" />
          </a>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;