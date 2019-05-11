import {FETCH_SCHEDULE} from './types';
import axios from 'axios';
import _ from 'lodash';

const API_URL = 'http://statsapi.mlb.com/api/v1/schedule/postseason/series';

const fetchScheduleSuccess = (data) => {
    return {
        type: FETCH_SCHEDULE,
        series: _.get(data, 'series')
    }
};

export const fetchSchedule = () => {
  return (dispatch) => {
    return axios.get(API_URL, {
        params: {
            sportId: 1,
            season: 2018,
            hydrate: 'team,broadcasts(all),seriesStatus(useOverride=true),decisions,person,probablePitcher,linescore(matchup)',
        }
    }).then(response => {
        dispatch(fetchScheduleSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export default fetchSchedule;

