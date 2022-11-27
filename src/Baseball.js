const { DIGIT } = require('./settings');
const { BALL, STRIKE, NOTHING } = require('./Message').output;

class Baseball {
  #count = { strike: 0, ball: 0 };

  getResult(computerNumbers, playerNumbers) {
    if (computerNumbers === playerNumbers) return `${DIGIT}${STRIKE}`;

    this.addCount(computerNumbers, playerNumbers);

    const { isNothing } = this.judgeNothing();
    if (isNothing) return NOTHING;

    return this.getStrikeAndBallResult();
  }

  addCount(computerNumbers, playerNumbers) {
    playerNumbers.forEach((playerNumber, index) => {
      const { isStrike, isBall } = Baseball.judgeStrikeOrBall(computerNumbers, playerNumber, index);

      if (isStrike) this.#count.strike += 1;
      if (isBall) this.#count.ball += 1;
    });
  }

  static judgeStrikeOrBall(computerNumbers, playerNumber, index) {
    const isStrike = playerNumber === computerNumbers[index];
    const isBall = !isStrike && computerNumbers.includes(playerNumber);

    return { isStrike, isBall };
  }

  judgeNothing() {
    const isNothing = this.#count.strike + this.#count.ball === 0;

    return { isNothing };
  }

  getStrikeAndBallResult() {
    const { strike, ball } = this.#count;
    const strikeResult = `${strike}${STRIKE}`;
    const ballResult = `${ball}${BALL}`;

    if (ball && strike) return `${ballResult} ${strikeResult}`;
    if (ball) return ballResult;
    if (strike) return strikeResult;
  }
}

module.exports = Baseball;
