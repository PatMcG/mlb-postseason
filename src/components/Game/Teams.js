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
      <img className="team-logo" alt={awayTeam.teamName} src={this.logoUrl(homeTeam.id)}/>
            <a href={awayTeam.clubUrl} className="away-team">{awayTeam.teamName} {awayTeam.score}</a>
            <span className="at-team">@</span>
            <img className="team-logo" alt={homeTeam.teamName} src={this.logoUrl(awayTeam.id)}/>
            <a href={homeTeam.clubUrl} className="home-team">{homeTeam.teamName} {homeTeam.score}</a>
      </div>
    );
  }
}


export default Teams;