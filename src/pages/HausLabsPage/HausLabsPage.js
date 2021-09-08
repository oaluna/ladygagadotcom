import React from 'react'

const HausLabsBackground = `https://pbs.twimg.com/media/EZCeQ2OU8AAA-7-.jpg:large`;

const HausLabsPage = () => {
    return (
        <div className="HausLabsPage">
            <img src={HausLabsBackground} alt="lady floating midair" style={{ width: "100vw", position: "fixed", left: 0, top: 0 }}/>
            <h1>Haus Labs Page</h1>
        </div>
    )
}
export default HausLabsPage;