import React, {Component} from 'react';
import Teams from './Teams';
import Pitchers from './Pitchers';
import {ESPN_LOGO} from '../../constants';

/* Renders a single row inside the series, containing Teams, Pitchers etc. */
class GameItem extends Component {
  
  render() {
    const {gameNumber, gameResult, teams, pitchingResult, gamePk} = this.props;

    return (
      <div key="game" className="game-item">
        <div className="game-number">{`Gm ${gameNumber}`}</div>

        <Teams teams={teams}/>

        <div className="status-broadcast-group">
            <a href={gameResult.url} className="game-result">{gameResult.label}</a>
            <img className="broadcast-image" src={ESPN_LOGO}></img>
        </div>

        <Pitchers pitchers={pitchingResult}/>

        <div className="media-group">
            <div href={`www.mlb.com/gameday/${gamePk}/final/wrap`} className="wrap">Wrap</div>
            <div href={`www.mlb.com/gameday/${gamePk}/final/video`} className="video">Video</div>
        </div>
      </div>
    );
  }
}

export default GameItem;