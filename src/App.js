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
            gameOver: false,
            weapons: ["Rock", "Paper", "Scissors"],
        };
        this.setNumberOfSets = this.setNumberOfSets.bind(this);
        this.weaponClick = this.weaponClick.bind(this);
    }

    componentDidUpdate() {
        // Har någon vunnit?
        if (
            (this.state.score.cpu >= this.state.numberOfSets / 2 ||
                this.state.score.player >= this.state.numberOfSets / 2) &&
            !this.state.gameOver
        ) {
            console.log("Game over");
            this.setState({
                numberOfSets: null,
                gameOver: true,
                playerHistory: [],
            });
        }
    }

    setNumberOfSets(event) {
        let sets = Number.parseInt(event.target.value);
        this.setState({
            numberOfSets: sets,
            gameOver: false,
            score: {
                player: 0,
                cpu: 0,
            },
        });
        event.preventDefault();
    }

    weaponClick(event) {
        let cpuPoints = 0;
        let playerPoints = 0;
        let cpuWeapon = Math.floor(Math.random() * 3);
        let playerWeapon = event.target.id;
        console.log(playerWeapon + " - " + cpuWeapon);
        if (cpuWeapon == playerWeapon) {
            console.log("Tie");
        } else if (
            (playerWeapon == 0 && cpuWeapon == 2) ||
            (playerWeapon == 1 && cpuWeapon == 0) ||
            (playerWeapon == 2 && cpuWeapon == 1)
        ) {
            console.log("Player wins");
            playerPoints++;
        } else {
            console.log("CPU wins");
            cpuPoints++;
        }
        let tempArray = this.state.playerHistory;
        tempArray.push(playerWeapon);
        this.setState({
            score: {
                player: this.state.score.player + playerPoints,
                cpu: this.state.score.cpu + cpuPoints,
            },
            playerHistory: tempArray,
        });
    }

    render() {
        return (
            <main>
                <Scoreboard score={this.state.score} />
                <Playarea
                    klick={this.setNumberOfSets}
                    numberofsets={this.state.numberOfSets}
                    weaponclick={this.weaponClick}
                />
                <History
                    playerHistory={this.state.playerHistory}
                    weapons={this.state.weapons}
                />
            </main>
        );
    }
}

export default App;
