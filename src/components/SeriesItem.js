import React, {Component} from 'react';

class SeriesItem extends Component {
  render() {
    const{series} = this.props;
    
    return (
      <div key="seriesItem" className="col s10 offset-s1 series-item black">
        <h4>
          {series.series.id}
        </h4>
      </div>
    );
  }
}

export default SeriesItem;