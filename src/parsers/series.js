import _ from 'lodash';

// Parse out the relevant data needed to render a Series Item
export function seriesItemParser(data) {
    const totalGames = _.get(data.series, 'totalGames');
    const games = _.get(data.series, 'games'); // games in the series

    // We want the final result of the series, data is contained in final game
    const lastGameOfSeries = _.get(games, [totalGames - 1]);
    const seriesStatus = _.get(lastGameOfSeries, 'seriesStatus');

    const teams = _.get(lastGameOfSeries, 'teams'); // teams in series
    const awayTeamId = _.get(teams, 'away.team.id');
    const homeTeamId = _.get(teams, 'home.team.id');

    const seriesTitle = _.get(seriesStatus, 'shortName'); // Name of the Series
    const seriesResult = _.get(seriesStatus, 'result'); // Desc. of series result

    // used to build the series header
    const series = {
        seriesTitle,
        seriesResult,
        awayTeamId,
        homeTeamId,
    }

    return { games, series};
}