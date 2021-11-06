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
              position: "relative",
              marginBottom: "5vh",
              fontFamily: "Lydian Csv BT, FolioBT, sans-serif",
              zIndex: 3,

              textAlign: "center",
              letterSpacing: "-2px",
            }}
          >
            Sign Up Now!
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="form-group"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10vh",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 200,
          width: "75%",
          height: "50%",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)",
          border: "1px solid rgba(255,255,255, 0.11)",
          borderRadius: "15px",
        }}
      >
        <div className="inner-container">
          <div className="icon error icon-show" style={{ display: "flex" }}>
            <div className="icon-content">
              <svg className="mail-svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </div>
          <h2 className="title">Sign up for our newsletter</h2>
          <div className="content">
            <p>
              Sign up for our newsletter to be the first to receive offers and
              stay up to date on all things Lady Gaga.
            </p>
          </div>
          <form action="" method="post">
            <div className="input-and-button">
              <input
                type="text"
                className="input"
                placeholder="E-Mail"
                name="email"
                autofocus
              />
              <button type="submit" className="confirm styled">
                Submit
              </button>
            </div>
            <input type="checkbox" name="checkbox" value="value" />
            <label htmlFor="checkbox" className="agbs">
              {" "}
              By submitting I am consenting to receive messages from this email
              list.
            </label>
          </form>
          <hr className="divider" />
          <div className="content-footer">
            <p>For demonstrative purposes only</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  </Layout>
);

export default SignUp;
