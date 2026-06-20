import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white font-semibold uppercase tracking-wider text-sm">{label}</p>
        <span className="text-white font-oswald font-semibold text-sm">{percentage}%</span>
      </div>
      <div className="w-full h-2.5 bg-neutral-800 rounded-none overflow-hidden relative">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
