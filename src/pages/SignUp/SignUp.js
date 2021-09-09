import React from "react";
import LGFour from "../../images/LG-04.jpg";
import { motion } from "framer-motion";
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

const SignUp = () => (
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
        <motion.div variants={title} className="flex w-100 text-center">
          <img
            src={LGFour}
            alt="Gaga in a yellow background"
            style={{ position: "fixed", left: 0, top: "-20vh", width: "100vw" }}
          />
          <h1
            style={{
              marginTop: "10vh",
              width: "100%",
              fontFamily: "Lydian Csv BT, FolioBT, sans-serif",
              zIndex: 3,
              position: "absolute",
              textAlign: "center",
              letterSpacing: "-2px",
            }}
          >
            Sign Up Now!
          </h1>
        </motion.div>
      </motion.div>
    </motion.section>
  </Layout>
);

export default SignUp;
