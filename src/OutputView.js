const { Console } = require('@woowacourse/mission-utils');
const { GAME_END } = require('./Message').output;

const OutputView = {
  printBaseballResult(isSuccess, result) {
    const message = isSuccess ? `${result}${GAME_END}` : result;

    Console.print(message);
  },
};

module.exports = OutputView;
