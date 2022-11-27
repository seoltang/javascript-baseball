const BaseballGame = require('./BaseballGame');
const { readPlayerNumbers } = require('./InputView');
const { printBaseballResult } = require('./OutputView');

class GameController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  handlePlayerNumbers() {
    readPlayerNumbers(this.playSingleRound.bind(this));
  }

  playSingleRound(boundFunction) {
    const { isSuccess, resultMessage } = this.#baseballGame.playSingleRound(boundFunction);

    printBaseballResult(isSuccess, resultMessage);
  }
}

const game = new GameController();
game.handlePlayerNumbers();

module.exports = GameController;
