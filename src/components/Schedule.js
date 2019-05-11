import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSchedule } from '../actions'
import SeriesList from './SeriesList';

class Schedule extends Component {
    componentWillMount() {
        this.props.fetchSchedule();
    }

    render() {
        return (
            <div className="series-list">
                <SeriesList series={this.props.series} />;
            </div>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {
        series: data
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchSchedule: () => dispatch(fetchSchedule())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
