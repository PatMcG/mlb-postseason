import React, {Component} from 'react';
import GameList from './GameList';

class SeriesItem extends Component {

  render() {
    const {games, seriesTitle, seriesResult} = this.props;
    
    return (
      <div key="seriesItem" className="col s10 offset-s1 series-item black">
        <h2>{seriesTitle}</h2>
        <h4>{seriesResult}</h4>
        <div className="game-list">
            <GameList games={games} />;
        </div>
      </div>
    );
  }
}

export default SeriesItem;