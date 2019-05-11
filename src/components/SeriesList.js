import React, {Component} from 'react';
import _ from 'lodash';

import SeriesItem from './SeriesItem';

class SeriesList extends Component {
  renderSeries() {
    const {series} = this.props;

    const seriesList = _.map(series, (value, key) => {
      return <SeriesItem key={key} series={value} />;
    });

    if (!_.isEmpty(seriesList)) {
      return seriesList;
    }

    return (
      <div className="col s10 offset-s1 center-align">
        <h4>There are no series scheduled!</h4>
      </div>
    );
  }

  render() {
    return (
      <div className="series-list-container">
        <div className="row">
          {this.renderSeries()}
        </div>
      </div>
    );
  }
}

export default SeriesList;
