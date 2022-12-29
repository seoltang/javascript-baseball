class Player {
  #playerNumbers;

  setNumbers(input) {
    this.#playerNumbers = input.split('').map((digit) => Number(digit));

    return this.#playerNumbers;
  }
}

module.exports = Player;
