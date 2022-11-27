const { Console } = require('@woowacourse/mission-utils');
const { GAME_START, GAME_END } = require('./Message').output;

const OutputView = {
  printStart() {
    Console.print(GAME_START);
  },

  printBaseballResult(isSuccess, result) {
    const message = isSuccess ? `${result}${GAME_END}` : result;

    Console.print(message);
  },
};

module.exports = OutputView;
