import _ from 'lodash';
import moment from 'moment';

import {PITCHER_BASE_URL, CLUB_BASE_URL, GAME_DAY_BASE_URL} from '../constants';

// Parse out all data needed to render a game item
export function gameItemParser(data) {
    const game = _.get(data, 'game'); // base game object
    const gameNumber = _.get(game, 'seriesGameNumber');
    const gamePk = _.get(game, 'gamePk'); // game id used for URL

    const gameDate = _.get(game, 'gameDate');
    const decisions = _.get(game, 'decisions');
    const pitchingResult = getPitchingResult(decisions);
    const gameResult = getGameResult(game);
    const teams = getTeams(game);

    return {
        gameNumber, 
        gameResult, 
        gamePk,
        gameDate: formatDate(gameDate),
        pitchingResult, 
        teams, 
    };
}

// Parse info needed to render the Teams component
const getTeams = (game) => {
    const teams = _.get(game, 'teams');
    const away = _.get(teams, 'away');
    const home = _.get(teams, 'home');


    return {
        awayTeam: getTeam(away), 
        homeTeam: getTeam(home)
    };
}

const getTeam = (teamData) => {
    const teamName = _.get(teamData, ['team', 'teamName']);
    const clubName = _.lowerCase(teamName.replace(/\s/g, ''));

    const team = {
        teamName,
        id: _.get(teamData, ['team', 'id']),
        score: _.get(teamData, 'score'),
        clubUrl: CLUB_BASE_URL + clubName,
    }

    return team;
}

const createPitcher = (pitcher, label) => {
    const nameSlug = _.get(pitcher, 'nameSlug'); // i.e. david-cone-41352
    return {
        name: _.get(pitcher, 'initLastName'),
        url: PITCHER_BASE_URL + nameSlug,
        label,
    }
}

// data needed for pitchers component
const getPitchingResult = (decisions) => {
    const winningPitcher = _.get(decisions, 'winner');
    const losingPitcher = _.get(decisions, 'loser');
    const savePitcher = _.get(decisions, 'save');

    const save = savePitcher ? createPitcher(savePitcher, 'SV: ') : undefined;

    const pitchingResult = {
        winner: createPitcher(winningPitcher, 'W: '),
        loser: createPitcher(losingPitcher, 'L: '),
    }

    if(save) {
        pitchingResult.save = save;
    }

    return pitchingResult;
}

// Format the raw date to short format e.g. Aug 3
const formatDate = (date) => {
    const formattedDate = moment(date).format('MMM D');
    
    return formattedDate;
}

const getGameResult = (game) => {
    const status = _.get(game, 'status')
    const detailedState = _.upperCase(_.get(status, 'detailedState')); // e.g. Final
    const codedGameState = _.get(status, 'codedGameState'); // e.g. F

    // if extra innings, needed for abbreviated result e.g. F/18
    const linescore = _.get(game, 'linescore');
    const scheduledInnings = _.get(linescore, 'scheduledInnings');
    const currentInning = _.get(linescore, 'currentInning');

    const gamePk = _.get(game, 'gamePk'); // game id used for URL

    const result = {
        label: currentInning > scheduledInnings ? `${codedGameState}/${currentInning}` : detailedState,
        url: `${GAME_DAY_BASE_URL}${gamePk}`,
    }

    return result;
}
