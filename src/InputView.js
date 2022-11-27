const { Console } = require('@woowacourse/mission-utils');
const { PLAYER_NUMBERS, GAME_COMMAND } = require('./Message').input;

const InputView = {
  readInput(message, callback) {
    Console.readLine(message, (input) => {
      callback(input);
    });
  },

  readPlayerNumbers(setPlayerNumbers) {
    InputView.readInput(PLAYER_NUMBERS, setPlayerNumbers);
  },

  readGameCommand(decideToRetryOrQuit) {
    InputView.readInput(GAME_COMMAND, decideToRetryOrQuit);
  },
};

module.exports = InputView;
