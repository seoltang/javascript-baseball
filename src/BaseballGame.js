const { Random } = require('@woowacourse/mission-utils');
const Baseball = require('./Baseball');
const ComputerNumberGenerator = require('./ComputerNumberGenerator');
const Player = require('./Player');

class BaseballGame {
  #computerNumbers = new ComputerNumberGenerator().generate(Random.pickNumberInRange);

  #player = new Player();

  playSingleRound(boundFunction) {
    const playerNumbers = this.#player.setNumbers(boundFunction);

    return this.getBaseBallResult(playerNumbers);
  }

  getBaseBallResult(playerNumbers) {
    const baseball = new Baseball();

    return baseball.getResult(this.#computerNumbers, playerNumbers);
  }
}

module.exports = BaseballGame;
