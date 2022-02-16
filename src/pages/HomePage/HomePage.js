import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import LGWide from "../../images/LG-Wide.jpg";
import LGTextGraphic from "../../images/LGTextGraphic.jpg";
import TrackList from "../../images/TRACKLIST.png";
import LGRemix from "../../images/LG-Remix.jpg";
import outNow from "../../images/outnow.png";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 1.5, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

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
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const gagaWideAnim = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const outNowAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.55,
    mixBlendMode: "color-dodge",
    transition: {
      duration: 5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const panOutAnim = {
  initial: { width: "100%", height: "100%" },
  animate: {
    transform: "scale(0.3)",
    duration: 5,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
};
export default function HomePage({ isFirstMount }) {

  const parallax = useParallax({
    speed: 10,
  });
  return (
    <Layout>
      <motion.section exit={{ opacity: 0 }}>
        {isFirstMount && <InitialTransition />}

        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <motion.h1
            variants={title}
            className="text-6xl font-black text-center mt-5"
          >
            <img src={LGTextGraphic} alt="Chromatica text graphic" />
          </motion.h1>

          <motion.section
            variants={gagaWideAnim}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-700 body-font"
            style={{ transform: "rotateY(180deg) !important" }}
          >
            <div className="container px-5 pt-12 mx-auto">
              <div className="flex flex-wrap m-4">
                 <img
                 ref={parallax.ref}
                  src={LGWide}
                  alt="gaga on a faraway planet"
                  style={{ position: "fixed", left: 0, top: "-20px", transform: "scale(1.2)" }}
                />
              </div>
            </div>
          </motion.section>
          <motion.section variants={outNowAnim} className="out-now">
            <div className="flex flex-wrap m-3 absolute">
              <img
                src={outNow}
                alt="text graphic"
                style={{
                  zIndex: 2,
                  position: "absolute",
                  top: 300,
                  left: 550,
                  transform: "scale(2)",
                  mixBlendMode: "color-dodge",
                }}
              />
            </div>
          </motion.section>
        </motion.div>
        {outNowAnim && (
          <motion.div variants={panOutAnim} className="pan-out">
            <div
              className="background"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                width: "100vw",
                height: "100vh",
                position: "absolute",
              }}
            ></div>
          </motion.div>
        )}
        <TrackListImage>
          <img
            src={TrackList}
            alt="Track list"
            style={{
              position: "absolute",
              left: "-20vw",
              top: "70vh",
              transform: "scale(0.45)",
            }}
          />
          <img
            src={LGRemix}
            alt="remix album cover"
            style={{
              position: "absolute",
              left: "35vw",
              top: "70vh",
              transform: "scale(0.45)",
            }}
          />
          <label
            htmlFor={LGRemix}
            style={{
              fontSize: "24px",
              position: "relative",
              color: "#f16e70",
              marginTop: "-15vh",
            }}
          >
            <em>DAWN OF CHROMATICA</em> AVAILABLE NOW
          </label>
        </TrackListImage>
      </motion.section>
    </Layout>
  );
}

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        ></text>
      </motion.svg>
    </motion.div>
  );
};

const TrackListImage = styled.div`
  margin-left: 50vw;
  margin-top: 100vh;
`;
