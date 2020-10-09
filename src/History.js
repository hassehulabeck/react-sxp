import React, { Fragment } from "react";

const History = (props) => {
    if (props.playerHistory.length > 0) {
        let historyList = props.playerHistory.map((item) => {
            return <li>{props.weapons[item]}</li>;
        });
        return (
            <>
                <h3>History</h3>
                <ol>{historyList}</ol>
            </>
        );
    } else {
        return <h3>History</h3>;
    }
};

export default History;
