import React, {Component} from 'react';
import Teams from './Teams';
import Pitchers from './Pitchers';
import {ESPN_LOGO} from '../../constants';

/* Renders a single row inside the series, containing Teams, Pitchers etc. */
class GameItem extends Component {
  
  render() {
    const {gameNumber, gameDate, gamePk, gameResult, pitchingResult, teams} = this.props;

    return (
      <div key="game" className="game-item">
        <div className="game-info">
          <div className="game-number">{`Gm ${gameNumber}`}</div>
          <div className="game-date">{gameDate}</div>
        </div>

        <Teams teams={teams}/>

        <div className="status-broadcast-group">
            <a href={gameResult.url} className="game-result">{gameResult.label}</a>
            <img className="broadcast-image" src={ESPN_LOGO}></img>
        </div>

        <Pitchers pitchers={pitchingResult}/>

        <div className="media-group">
            <a href={`www.mlb.com/gameday/${gamePk}/final/wrap`} className="wrap">Wrap</a>
            <a href={`www.mlb.com/gameday/${gamePk}/final/video`} className="video">Video</a>
        </div>
      </div>
    );
  }
}

export default GameItem;