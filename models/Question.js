export class Question{

    /**
     *
     * @param {string} name this is the name of the question
     * @param {string[]} choices this is the choices of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(name, choices, answer) {
        this.name = name;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     *
     * @param {string} choice of the answer
     * @returns {boolean} return if the answer is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}