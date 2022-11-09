export class Ui {

    constructor() {}

    /**
     *
     * @param {string }text
     */
    showQuestion(text) {
        const title = document.getElementById('question');
        title.innerText = text;
    }

    /**
     * @param {string[]} choices
     * @param callback
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerText = "";
        for(let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));
            choicesContainer.append(button);
        }
    }

    /**
     *
     * @param {number} score
     */
    showScore(score) {
        const resultHtml = `
            <h1> Result: </h1>
            <h4> socre: ${score} </h4>
        `;

        const element = document.getElementById('quiz');
        element.innerHTML = resultHtml;
    }

    /**
     *
     * @param {number} question
     * @param {number} total
     */
    showProgress(question, total) {
        const ele = document.getElementById('progress');
        ele.innerHTML = `Question ${question} of ${total}`;
    }
}