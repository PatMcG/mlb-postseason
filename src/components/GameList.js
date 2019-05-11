import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import GameItem from './GameItem';

import { gameItemParser, Wrapper } from '../parsers';


class GameList extends Component {

    constructor() {
        super()
        this.GameItem = Wrapper(GameItem, gameItemParser);
    }

    renderGame() {
        const { games } = this.props;
        const {GameItem} = this;

        const gameList = _.map(games, (game, key) => {
            return <GameItem key={key} game={game} />;
        });
        if (!_.isEmpty(gameList)) {
            return gameList;
        }
        return (
            <div className="col s10 offset-s1 center-align">
                <h4>There are no games scheduled!</h4>
            </div>
        );
    }

    render() {
        return (
            <div className="game-list-container">
                <div className="row">
                    {this.renderGame()}
                </div>
            </div>
        );
    }
}

export default GameList;
