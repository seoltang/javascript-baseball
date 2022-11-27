const BaseballGame = require('./BaseballGame');
const { readPlayerNumbers } = require('./InputView');

class GameController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  handlePlayerNumbers() {
    readPlayerNumbers(this.setPlayerNumbers.bind(this));
  }

  setPlayerNumbers(boundFunction) {
    const result = this.#baseballGame.playSingleRound(boundFunction);
  }
}

const game = new GameController();
game.handlePlayerNumbers();

module.exports = GameController;
