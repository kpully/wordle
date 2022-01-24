import {wordList} from '../data/dictionary.tsx';

export function generateWord() {
	const i = Math.floor(Math.random()*wordList.length);
	return wordList[i];
}

enum checks {
  ABSENT = "ABSENT",
  PRESENT = "PRESENT",
  CORRECT = "CORRECT",
}

export function checkGuess(answer: string, guess: string[]) {
	const answerList = answer.split("");
	const answerLetters = new Set(answerList);
	var results = [];
	let absent = new Set();
	let present = new Set();
	let correct = new Set();
	for (var i=0; i<answerList.length; i++) {
		if (guess[i]===answerList[i]) {
			results[i]=checks.CORRECT;
			correct.add(guess[i]);
		} else if (answerLetters.has(guess[i])) {
			results[i]=checks.PRESENT;
			present.add(guess[i]);
		} else {
			results[i]=checks.ABSENT;
			absent.add(guess[i]);
		}
	}
	return [results, present, absent, correct];
}