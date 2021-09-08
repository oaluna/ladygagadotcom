import React from "react";
import { motion } from "framer-motion";
import LGTwo from "../../images/LG-02.jpg";
import Layout from "../../components/Layout/Layout";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const TourPage = () => {
  return (
    <Layout>
      <motion.section
        exit={{ opacity: 0 }}
        className="relative text-gray-700 body-font"
      >
        <motion.div
          variants={content}
          animate="animate"
          initial="initial"
          className="container px-5 py-24 mx-auto"
        >
          <motion.div
            variants={title}
            className="flex w-100 text-center"
          >
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              ON TOUR
            </h1>
                      <img src={LGTwo} alt="Gaga floating" style={{position: "fixed",left: 0, top: "-20vh",width: "100vw", zIndex: 0}}/>
            
          </motion.div>
         
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default TourPage;
