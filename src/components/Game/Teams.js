import React, {Component} from 'react';

/* Renders the teams name and scores inside the GameItem */
class Teams extends Component {

  logoUrl(teamId) {
      return `https://www.mlbstatic.com/team-logos/${teamId}.svg`
  }  

  render() {
    const {awayTeam, homeTeam} = this.props.teams;

    return (
      <div key="teams" className="teams-item game-group">
      <img className="team-logo" alt="Milwaukee Brewers" src={this.logoUrl(homeTeam.id)}/>
            <a href={awayTeam.clubUrl} className="away-team">{awayTeam.teamName} {awayTeam.score}</a>
            <span className="at-team">@</span>
            <a href={homeTeam.clubUrl} className="home-team">{homeTeam.teamName} {homeTeam.score}</a>
        <img className="team-logo" alt="Milwaukee Brewers" src={this.logoUrl(awayTeam.id)}/>
      </div>
    );
  }
}


export default Teams;