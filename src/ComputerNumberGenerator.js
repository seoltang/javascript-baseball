const { SINGLE_DIGIT_MIN_NUMBER, SINGLE_DIGIT_MAX_NUMBER } = require('./settings');

class ComputerNumberGenerator {
  #computerNumbers = [];

  static #pickNumber(pickNumberInRange) {
    return pickNumberInRange(SINGLE_DIGIT_MIN_NUMBER, SINGLE_DIGIT_MAX_NUMBER);
  }

  generate(pickNumberInRange) {
    while (this.#computerNumbers.length < 3) {
      const pickedNumber = ComputerNumberGenerator.#pickNumber(pickNumberInRange);
      if (!this.#computerNumbers.includes(pickedNumber)) {
        this.#computerNumbers.push(pickedNumber);
      }
    }

    return this.#computerNumbers;
  }
}

module.exports = ComputerNumberGenerator;
