class ErrorHandler {
  #errorMessage = {
    HEADER: '[ERROR]',

    PLAYER_NUMBERS_OUT_OF_RANGE: `${
      this.#errorMessage.HEADER
    } 1부터 9까지의 숫자로 이루어진 3자리의 수를 입력해야 합니다.`,

    PLAYER_NUMBERS_DUPLICATE: `${
      this.#errorMessage.HEADER
    } 서로 다른 수로 이루어진 3자리의 수를 입력해야 합니다.`,

    GAME_COMMAND_INVALID: `${
      this.#errorMessage.HEADER
    } 1과 2 중 하나의 수를 입력해야 합니다. (1: 재시작, 2: 종료)`,
  };
}

module.exports = ErrorHandler;
