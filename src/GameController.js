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
    this.#baseballGame.setPlayerNumbers(boundFunction);
  }
}

const game = new GameController();
game.handlePlayerNumbers();

module.exports = GameController;
