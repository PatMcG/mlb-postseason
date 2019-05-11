import React from 'react';
import {gameItemParser} from './game';
import {seriesItemParser} from './series';

// Wrapper to bind parser to child components
export function Wrapper(Component, parser){
    return function(){
      return <Component {...parser.apply(null,arguments)} />
    } 
}

export {gameItemParser, seriesItemParser};
