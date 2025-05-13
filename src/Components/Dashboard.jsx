import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Dashboard.css';

// Dummy data
const dummyData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  description: `This is a description for item ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
}));

// Animation variants for alternating top-left and top-right corner slide-ins
const getAnimationVariant = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? 100 : -100, // Top-right for even, top-left for odd
    y: -50, // Both come from above
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 0.15 * (index % 10), // Stagger animations for every 10 items
    },
  },
});

// Hover effect for title
const titleHover = {
  hover: { scale: 1.05, color: '#0052cc', transition: { duration: 0.3 } }, // Professional blue accent
};

const ContentItem = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3, // Trigger when 30% of the item is visible
  });

  const variant = getAnimationVariant(index);

  return (
    <motion.div
      ref={ref}
      className="content-item"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variant}
      whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } }} // Subtle hover lift
    >
      <motion.h2 variants={titleHover} whileHover="hover">
        {item.title}
      </motion.h2>
      <p>{item.description}</p>
    </motion.div>
  );
};

const Dashboard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="content-container">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Large Content Component
      </motion.h1>
      <div className="content-list">
        {dummyData.map((item, index) => (
          <ContentItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

// Inline CSS (equivalent to Dashboard.css)
const styles = `
.content-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Arial, sans-serif; /* Professional Microsoft-inspired font */
}

.content-list {
  max-height: 80vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-list::-webkit-scrollbar {
  display: none;
}

.content-item {
  padding: 20px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff; /* Clean white background */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-item h2 {
  margin: 0;
  font-size: 1.6em;
  font-weight: 600;
  color: #1f1f1f; /* Dark professional text */
}

.content-item p {
  margin: 10px 0 0;
  color: #4f4f4f; /* Lighter gray for description */
  line-height: 1.5;
}

h1 {
  font-size: 2.2em;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 20px;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);