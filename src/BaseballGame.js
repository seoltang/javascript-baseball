const { Random } = require('@woowacourse/mission-utils');
const ComputerNumberGenerator = require('./ComputerNumberGenerator');

class BaseballGame {
  #computerNumbers = new ComputerNumberGenerator().generate(Random.pickNumberInRange);
}

module.exports = BaseballGame;
