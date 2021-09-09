import React from "react";
import LGThree from "../../images/LG-03.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import vegasData from "./vegasData";

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

class VegasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShow: parseInt(this.props.match.params.show, 10),
      nextShow: parseInt(this.props.match.params.show, 10) + 1,
    };
  }

  componentDidMount() {
    if (this.state.nextShow === vegasData.length - 1) {
      this.setState({
        nextShow: 0,
      });
    }
  }
  render() {
    const vegasCards = vegasData.map((show) => {
      return (
        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)",
            border: "1px solid rgba(255,255,255, 0.11)",
            width: "300px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            margin: "15px"
          }}
        >
          <div className="card-title" style={{ position: "relative" }}>
            {" "}
            <h1>{show.date}</h1>
          </div>
          <div className="card-content" style={{ position: "relative" }}>
            <p>{show.venue}</p>
          </div>
        </div>
      );
    });

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
            <motion.div variants={title} className="flex w-100 text-center">
              <img
                src={LGThree}
                alt="Gaga in a yellow background"
                style={{
                  left: 0,
                  top: "-20vh",
                  width: "100vw",
                  zIndex: -1,
                  position: "fixed",
                }}
              />
              <h1
                style={{
                  marginTop: "10vh",
                  width: "100%",
                  fontFamily: "Lydian Csv BT, FolioBT, sans-serif",
                  zIndex: 2,
                  position: "relative",
                  textAlign: "center",
                  letterSpacing: "-2px",
                }}
              >
                LIVE IN LAS VEGAS
              </h1>
              <div
                className="card-container"
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                    alignItems: "center",
                  margin:"0 auto",
                    justifyContent: "space-evenly",
                  width: "80vw"
                }}
              >
                {vegasCards}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    );
  }
}
export default VegasPage;
