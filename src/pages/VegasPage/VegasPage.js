import React from 'react'
import LGThree from "../../images/LG-03.jpg";

function VegasPage() {
    return (
        <div className="VegasPage">
            <h1>Live in Las Vegas</h1>
            <img src={LGThree} alt="Gaga in a yellow background" style={{ position: "fixed",left: 0, top: "-20vh", width: "100vw" }}/>
        </div>
    )
}

export default VegasPage