const { DIGIT, COMMAND } = require('./settings');

const Message = {
  input: {
    PLAYER_NUMBERS: '숫자를 입력해주세요 : ',
    RETRY_OR_QUIT: `게임을 새로 시작하려면 ${COMMAND.retry}, 종료하려면 ${COMMAND.quit}를 입력하세요.`,
  },

  output: {
    GAME_START: '숫자 야구 게임을 시작합니다.\n',
    GAME_END: `\n${DIGIT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
  },
};

module.exports = Message;
