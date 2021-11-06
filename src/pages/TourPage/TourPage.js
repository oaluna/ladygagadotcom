import React from "react";
import LGTwo from "../../images/LG-02.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import { tourData } from "./tourData";

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

class TourPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShow: parseInt(this.props.match.params.show, 10),
      nextShow: parseInt(this.props.match.params.show, 10) + 1,
    };
  }

  componentDidMount() {
    if (this.state.nextShow === tourData.length - 1) {
      this.setState({
        nextShow: 0,
      });
    }
  }
  render() {
    const TourCards = tourData.map((show) => {
      return (
        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)",
            border: "1px solid rgba(255,255,255, 0.11)",
            width: "350px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            margin: "15px",
            borderRadius: "10px",
            boxShadow: "0px 1.5px 6px #222",
            textAlign: "center",
            lineHeight: 1
          }}
        >
          <div
            className="card-title"
            style={{ position: "relative", letterSpacing: "-5px" }}
          >
            {" "}
            <h2>{show.date}</h2>
          </div>
          <div
            className="card-content"
            style={{
              fontSize: "56px",
              color: "limegreen",
              position: "relative",
              letterSpacing: "-3px",
              textDecoration: "none",
              zIndex: 100,
            }}
          >
            <p>{show.venue}</p>
          </div>
          <p style={{ color: "red", fontWeight: 900 }}>POSTPONED UNTIL 2022</p>
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
                src={LGTwo}
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
                  marginTop: "15vh",
                  width: "100%",
                  fontFamily: "Lydian Csv BT, FolioBT, sans-serif",
                  zIndex: 2,
                  position: "relative",
                  textAlign: "center",
                  letterSpacing: "-2px",
                }}
              >
                THE CHROMATICA BALL WORLD TOUR (TBD)
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
                  margin: "0 auto",
                  justifyContent: "space-evenly",
                  width: "80vw",
                }}
              >
                {TourCards}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    );
  }
}
export default TourPage;
