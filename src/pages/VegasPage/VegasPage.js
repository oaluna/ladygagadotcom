import React from 'react'
import LGTwo from "../../images/LG-02.jpg";

function VegasPage() {
    return (
        <div className="VegasPage">
            <h1>Live in Las Vegas</h1>
            <img src={LGTwo} alt="Gaga in a yellow background" style={{ position: "fixed",left: 0, top: "-20vh", width: "100vw" }}/>
        </div>
    )
}

export default VegasPage