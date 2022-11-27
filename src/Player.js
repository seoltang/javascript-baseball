class Player {
  #playerNumbers;

  setNumbers(input) {
    this.#playerNumbers = input;

    return this.#playerNumbers;
  }
}

module.exports = Player;
