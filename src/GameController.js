const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('./BaseballGame');
const { readPlayerNumbers, readGameCommand } = require('./InputView');
const { printStart, printBaseballResult } = require('./OutputView');
const { COMMAND } = require('./settings');

class GameController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  start() {
    printStart();
    this.readNumbers();
  }

  readNumbers() {
    readPlayerNumbers(this.playSingleRound.bind(this));
  }

  playSingleRound(boundFunction) {
    const { isSuccess, resultMessage } = this.#baseballGame.playSingleRound(boundFunction);
    printBaseballResult(isSuccess, resultMessage);

    this.continueOrStop(isSuccess);
  }

  continueOrStop(isSuccess) {
    if (isSuccess) {
      this.decideToRetryOrQuit();
      return;
    }

    this.readNumbers();
  }

  decideToRetryOrQuit() {
    readGameCommand(this.retryOrQuit.bind(this));
  }

  retryOrQuit(gameCommand) {
    const isRetry = gameCommand === COMMAND.retry;

    if (isRetry) {
      this.retry();
      return;
    }

    GameController.quit();
  }

  retry() {
    this.#baseballGame = new BaseballGame();
    this.readNumbers();
  }

  static quit() {
    Console.close();
  }
}

const game = new GameController();
game.start();

module.exports = GameController;
