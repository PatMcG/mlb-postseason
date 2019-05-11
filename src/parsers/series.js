import _ from 'lodash';

// Parse out the relevant data needed to render a Series Item
export function seriesItemParser(series) {
    const totalGames = _.get(series.series, 'totalGames');
    const games = _.get(series.series, 'games'); // games in the series

    // We want the final result of the series, data is contained in final game
    const seriesStatus = _.get(games, [totalGames - 1, 'seriesStatus']);

    const seriesTitle = _.get(seriesStatus, 'shortName'); // Name of the Series
    const seriesResult = _.get(seriesStatus, 'result'); // Desc. of series result
    
    return { games, seriesTitle, seriesResult };
}
