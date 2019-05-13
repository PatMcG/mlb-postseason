import React, { Component } from 'react';
import _ from 'lodash';
import GameItem from './GameItem';

import { gameItemParser, Wrapper } from '../../parsers';
import './game.css';

/* Responsible for rendering the list of GameItems */
class GameList extends Component {

    constructor() {
        super()
        this.GameItem = Wrapper(GameItem, gameItemParser);
    }

    renderGames() {
        const { games } = this.props;
        const {GameItem} = this;

        const gameList = _.map(games, (game, key) => {
            return <GameItem key={key} game={game} />
        });
        if (!_.isEmpty(gameList)) {
            return gameList;
        }
        return (
            <div className="game-list-empty">
                <h4>There are no games scheduled!</h4>
            </div>
        );
    }

    render() {
        return (
            <div className="game-list-container">
                <div className="row">
                    {this.renderGames()}
                </div>
            </div>
        );
    }
}

export default GameList;
