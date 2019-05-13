import React, {Component} from 'react';
import GameList from './GameList';
import SeriesHeader from './SeriesHeader';

/* Renders a Series Header and all games associated with series */
class SeriesItem extends Component {

  render() {
    const {series, games} = this.props;
    
    return (
      <div key="seriesItem" className="series-item">
        <SeriesHeader series={series}/>
        <div className="game-list">
            <GameList games={games} />
        </div>
      </div>
    );
  }
}

export default SeriesItem;