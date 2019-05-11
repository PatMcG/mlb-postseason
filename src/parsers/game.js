import _ from 'lodash';

const GAME_DAY_BASE_URL = 'www.mlb.com/gameday/';
const PITCHER_BASE_URL = 'm.mlb.com/player/';

export function gameItemParser(game) {
    
    const gameNumber = _.get(game.game, 'seriesGameNumber');

    const decisions = _.get(game.game, 'decisions');
    // const pitchingResult = getPitchingResult(decisions);
    const gameResult = getGameResult(game.game);
    const teams = getTeams(game.game);

    return {gameNumber, gameResult, teams};
}

const getTeams = (game) => {
    const teams = _.get(game, 'teams');
    const away = _.get(teams, 'away.team');
    const home = _.get(teams, 'home.team');

    const awayTeam = {
        teamName: _.get(away, 'teamName'),
        score: _.get(away, 'score'),
        clubURL: 'foo'
    }
    
    const homeTeam = {
        teamName: _.get(home, 'teamName'),
        score: _.get(home, 'score'),
        clubURL: 'foo'
    }

    return {awayTeam, homeTeam};
}

// This will build the URL needed for the pitcher's profile url
const getPitcherURL = (pitcher) => {
    const nameSlug = _.get(pitcher, 'nameSlug'); // i.e. david-cone-41352
    const index = nameSlug.lastIndexOf('-');
    const pitcherId = nameSlug.substr(index + 1); // grab id for URL
    const pitcherName = nameSlug.substr(0, index); // grab hyphen name

    return `${PITCHER_BASE_URL}${pitcherId}/${pitcherName}`;
}

const getPitchingResult = (decisions) => {
    const winningPitcher = _.get(decisions, 'winner');
    const losingPitcher = _.get(decisions, 'loser');
    const savePitcher = _.get(decisions, 'save');

    const pitchingResult = {
        winner: {
            name: _.get(winningPitcher, 'initLastName'),
            url: getPitcherURL(winningPitcher)
        },
        loser: {
            name: _.get(losingPitcher, 'initLastName'),
            url: getPitcherURL(losingPitcher)
        },
        save: {
            name: _.get(savePitcher, 'initLastName'),
            url: getPitcherURL(savePitcher)
        }
    }

    return pitchingResult;
}

const getGameResult = (game) => {
    const status = _.get(game, 'status')
    const detailedState = _.get(status, 'detailedState'); // i.e. F
    const codedGameState = _.get(status, 'codedGameState'); // i.e. Final

    // if extra innings, needed for abbreviated result i.e. F/18
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
