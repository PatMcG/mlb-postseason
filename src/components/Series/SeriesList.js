import React, { Component } from 'react';
import _ from 'lodash';

import SeriesItem from './SeriesItem';
import { seriesItemParser, Wrapper } from '../../parsers';
import {POST_SEASON_LOGO} from '../../constants';
import './series.css';

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

    //TODO: Add Button to set state and filter by Round/Day
    //TODO: Can create game objects by date and pass to GameList
    render() {
        return (
            <div className="series-list-container">
            <img className="schedule-logo" src={POST_SEASON_LOGO}></img>
                <div className="series-row">
                    {this.renderSeries()}
                </div>
            </div>
        );
    }
}

export default SeriesList;
