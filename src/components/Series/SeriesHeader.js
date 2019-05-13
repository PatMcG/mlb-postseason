import React, { Component } from 'react';

/* Renders the Header inside each Series Item, contains Title and result*/
class SeriesHeader extends Component {

    teamLogoUrl(teamId) {
        return `https://www.mlbstatic.com/team-logos/${teamId}.svg`;
    }

    render() {
        const { seriesTitle, seriesResult, awayTeamId, homeTeamId } = this.props.series;

        return (
            <div key="series-header" className="series-header">
                <div className="series-header-info">
                    <div className="team-header-logo left">
                        <img src={this.teamLogoUrl(homeTeamId)} className="logo-left"></img>
                    </div>
                    <div className="series-title">{seriesTitle}</div>
                    <div className="series-result">{seriesResult}</div>
                    <div className="team-header-logo right">
                        <img src={this.teamLogoUrl(awayTeamId)} className="logo-right"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeriesHeader;