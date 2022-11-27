const { Random } = require('@woowacourse/mission-utils');
const ComputerNumberGenerator = require('./ComputerNumberGenerator');
const Player = require('./Player');

class BaseballGame {
  #computerNumbers = new ComputerNumberGenerator().generate(Random.pickNumberInRange);

  #player;

  constructor() {
    this.#player = new Player();
  }

  setPlayerNumbers(boundFunction) {
    const playerNumbers = this.#player.setNumbers(boundFunction);
  }
}

module.exports = BaseballGame;
