import {questions} from "./data/questions.js";
import {Quiz} from "./models/Quiz.js";
import {Ui} from "./models/Ui.js";
import  "./models/Question.js";

/**
 *
 * @param {Quiz} quiz
 * @param {Ui }ui
 * @returns {number}
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScore(quiz.score);
    } else {
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestionIndex().name);
        ui.showChoices(quiz.getQuestionIndex().choices, (choice) => {
            quiz.guess(choice)
            renderPage(quiz, ui);
        });
    }

}

function main() {
    const quiz = new Quiz(questions);
    const ui = new Ui();

    renderPage(quiz, ui);
}

main();

//console.log(questions)