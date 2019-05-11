import React, {Component} from 'react';

class GameItem extends Component {
  render() {
    const {gameNumber, gameResult, teams} = this.props;

    const {awayTeam, homeTeam} = teams;
    // const {winningPitcher, losingPitcher} = pitchingResult;
    return (
      <div key="game" className="col s10 offset-s1 game-item black">
        <div className="game-number">{`Gm ${gameNumber}`}</div>
        <div className="teams">
            <div className="away-team">{awayTeam.teamName} {awayTeam.score}</div>
            <div className="home-team">{homeTeam.teamName} {homeTeam.score}</div>
        </div>
      </div>
    );
  }
}

export default GameItem;