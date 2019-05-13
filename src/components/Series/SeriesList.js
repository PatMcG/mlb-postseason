import React, { Component } from 'react';
import _ from 'lodash';

import SeriesItem from './SeriesItem';
import { seriesItemParser, Wrapper } from '../parsers';

/* Handles rendering the SeriesItems*/
class SeriesList extends Component {
    constructor() {
        super()
        this.SeriesItem = Wrapper(SeriesItem, seriesItemParser);
    }

    renderSeries() {
        const { series } = this.props;
        const {SeriesItem} = this;
        
        const seriesList = _.map(series, (value, key) => {
            return <SeriesItem key={key} series={value} />
        });

        if (!_.isEmpty(seriesList)) {
            return seriesList;
        }

        return (
            <div className="series-list-empty">
                <h4>There are no series scheduled!</h4>
            </div>
        );
    }

    render() {
        return (
            <div className="series-list-container">
            <img className="schedule-logo" src="//www.mlbstatic.com/mlb.com/sections/postseason/builds/a5c9af3e04ddfb3d614e5a3a2a71fe091bbd72e7_1540491044/images/postseason_logo.svg"></img>
                <div className="series-row">
                    {this.renderSeries()}
                </div>
            </div>
        );
    }
}

export default SeriesList;
