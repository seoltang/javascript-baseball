const { DIGIT, COMMAND } = require('./settings');

const Message = {
  GAME_START: '숫자 야구 게임을 시작합니다.\n',
  INPUT: '숫자를 입력해주세요 : ',
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  GAME_OVER: `${DIGIT}개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 ${COMMAND.retry}, 종료하려면 ${COMMAND.quit}를 입력하세요.`,
};

module.exports = Message;