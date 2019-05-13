import React, {Component} from 'react';
import _ from 'lodash';

/* Renders the Pitchers inside the GameItem */
class Pitchers extends Component {
  renderPitchers() {
    const {pitchers} = this.props;

    const pitcherList = _.map(pitchers, (pitcher, key) => {
      return  <div key={key} className="pitcher">
        <span>{pitcher.label}</span>
        <a href={pitcher.url} className="pitcher-name">{pitcher.name}</a>
      </div>
    });

    if (!_.isEmpty(pitcherList)) {
      return pitcherList;
    }
  }

  render() {
    return (
      <div key="teams" className="pitchers-item game-group">
           {this.renderPitchers()}
      </div>
    );
  }
}

export default Pitchers;