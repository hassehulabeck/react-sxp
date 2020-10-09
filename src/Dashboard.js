import React from "react";

const Dashboard = () => {
    return (
        <div>
            <div class="weapons">
                <button class="btn_weapon" onClick={this.handleClick} id="rock">
                    Rock
                </button>
                <button
                    class="btn_weapon"
                    onClick={this.handleClick}
                    id="paper"
                >
                    Paper
                </button>
                <button
                    class="btn_weapon"
                    onClick={this.handleClick}
                    id="scissor"
                >
                    Scissor
                </button>
            </div>
            <div class="result">
                <p>
                    <b>Round:</b> {this.state.counter} out of{" "}
                    {this.state.totalRounds}
                </p>
                <p>
                    <b>The weapon Player selected:</b>{" "}
                    {weapons[this.state.index].emojiDec}
                </p>
                <p>
                    <b>The weapon Computer selected:</b>{" "}
                    {this.state.computerSelected.emojiDec}
                </p>
                <p>
                    <b>Result of this round:</b> {this.state.roundResult}
                </p>
                <p>
                    <b>Player : Computer </b> {this.state.playerScore} :{" "}
                    {this.state.computerScore}
                </p>
            </div>
        </div>
    );
};
export default Dashboard;
