const { Console } = require('@woowacourse/mission-utils');
const { PLAYER_NUMBERS } = require('./Message').input;

const InputView = {
  readInput(message, callback) {
    Console.readLine(message, (input) => {
      callback(input);
    });
  },

  readPlayerNumbers(setPlayerNumbers) {
    InputView.readInput(PLAYER_NUMBERS, setPlayerNumbers);
  },
};

module.exports = InputView;
