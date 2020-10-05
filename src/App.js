import React from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";
import Playarea from "./Playarea";
import History from "./History";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfSets: null,
            playerHistory: [],
            score: {
                cpu: 0,
                player: 0,
            },
            weapons: ["Rock", "Paper", "Scissors"],
        };
        this.setNumberOfSets = this.setNumberOfSets.bind(this);
    }

    setNumberOfSets(event) {
        let sets = Number.parseInt(event.target.numberofsets.value);
        this.setState({
            numberOfSets: sets,
        });
        event.preventDefault();
    }

    render() {
        return (
            <main>
                <Scoreboard />
                <Playarea
                    klick={this.setNumberOfSets}
                    numberofsets={this.state.numberOfSets}
                />
                <History />
            </main>
        );
    }
}

export default App;
