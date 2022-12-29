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
    this.readPlayerNumbers();
  }

  readPlayerNumbers() {
    readPlayerNumbers(this.playSingleRound.bind(this));
  }

  playSingleRound(boundFunction) {
    const { isSuccess, resultMessage } = this.#baseballGame.playSingleRound(boundFunction);
    printBaseballResult(isSuccess, resultMessage);

    this.continueOrStop(isSuccess);
  }

  continueOrStop(isSuccess) {
    if (isSuccess) {
      this.readGameCommand();
      return;
    }

    this.readPlayerNumbers();
  }

  readGameCommand() {
    readGameCommand(this.retryOrQuit.bind(this));
  }

  static decideToRetryOrQuit(gameCommand) {
    const isRetry = gameCommand === COMMAND.retry;
    const isQuit = gameCommand === COMMAND.quit;

    return { isRetry, isQuit };
  }

  retryOrQuit(gameCommand) {
    const { isRetry, isQuit } = GameController.decideToRetryOrQuit(gameCommand);

    if (isRetry) {
      this.retry();
      return;
    }

    if (isQuit) GameController.quit();
  }

  retry() {
    this.#baseballGame = new BaseballGame();
    this.readPlayerNumbers();
  }

  static quit() {
    Console.close();
  }
}

module.exports = GameController;
