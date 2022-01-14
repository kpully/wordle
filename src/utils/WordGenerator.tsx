export function generateWord() {
	const wordList = [
		"party",
		"steak",
		"email",
		"gloss",
		"clock",
		"mouse",
		"pants",
		"light",
		"plane",
		"array",
		"giddy",
		"frown",
		"smile",
		"white",
		"windy",
		"sunny"
	];
	const i = Math.floor(Math.random()*wordList.length);
	return wordList[i];
}

enum checks {
  ABSENT = "ABSENT",
  PRESENT = "PRESENT",
  CORRECT = "CORRECT",
}

export function checkGuess(answer: string, guess: string[]) {
	console.log("checkGuess");
	console.log(guess);
	const answerList = answer.split("");
	const answerLetters = new Set(answerList);
	var results = [];
	for (var i=0; i<answerList.length; i++) {
		if (guess[i]===answerList[i]) {
			results[i]=checks.CORRECT;
		} else if (answerLetters.has(guess[i])) {
			results[i]=checks.PRESENT;
		} else {
			results[i]=checks.ABSENT;
		}
	}
	return results;
}