import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => {
    return (
        <section className="scoreboard">
            <section className="scoreboxes">
                <div>
                    <h1>Player</h1>
                    <p>{props.score.player}</p>
                </div>
                <div>
                    <h1>CPU</h1>
                    <p>{props.score.cpu}</p>
                </div>
            </section>
        </section>
    );
};

export default Scoreboard;
