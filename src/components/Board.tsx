import React, { useState, useEffect } from 'react';
import { Container} from "react-bootstrap";
import Keyboard from './Keyboard.tsx';
import ReactDOM from 'react-dom';
import Word from './Word.tsx';
import {generateWord, checkGuess} from '../utils/WordUtils.tsx';



function initWords(x: number) {
	let words = {};
	words[0] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[1] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[2] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[3] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[4] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[5] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}

	return words;
}

type BoardProps = {
}

type BoardState = {
	curr: number;
	words: Array<any>;
	currWord: number;
	answer: string;
	answerFound: boolean;
	gameOver: boolean;
	absent: Set<string>;
	present: Set<string>;
	correct: Set<string>;
	currLetter: number;
}

export default class Board extends React.Component<BoardProps, BoardState> {
	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.state = {	curr: 0,
						words: initWords(5),
						currWord: 0,
						currLetter: 0,
						answer: generateWord(),
						answerFound: false,
						gameOver: false,
						absent: new Set(),
						present: new Set(),
						correct: new Set(),
					}
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.incrementLetterCounter = this.incrementLetterCounter.bind(this);
		this.incrementWordCounter = this.incrementWordCounter.bind(this);
		this.keyboardCallback = this.keyboardCallback.bind(this);
		this.handleLetter = this.handleLetter.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

	}

	incrementLetterCounter() {
		if (this.state.currLetter < 5) {
		this.setState({currLetter: this.state.currLetter+1});
		}
	}

	incrementWordCounter() {
		// increments word counter annd reset letter counter
		if (this.state.currWord < 5) {
			this.setState({currWord: this.state.currWord+1, currLetter: 0});
		} else {
			this.setState({gameOver: true});
		}
	}

	handleLetter(key: string) {
		const currLetter=this.state.currLetter;
		if (currLetter < 5) {
			const currWord=this.state.currWord;
			const newWords = {...this.state.words};
			newWords[currWord].letters[currLetter]=key;
			this.setState({words: newWords});
			this.incrementLetterCounter();
		}
	}

	handleEnter() {
		if (this.state.currLetter==5) {
			// call checker function
			const [results, newPresent, newAbsent, newCorrect] = checkGuess(this.state.answer,this.state.words[this.state.currWord].letters);
			const newWords = {...this.state.words};
			const currWord=this.state.currWord;
			newWords[currWord].checks=results;
			const oldAbsent = new Set([...this.state.absent]);
			const oldCorrect = new Set([...this.state.correct]);
			const oldPresent = new Set([...this.state.present]); 
			this.setState({
				words: newWords,
				correct: new Set([...oldCorrect, ...newCorrect]),
				present: new Set([...oldPresent, ...newPresent]),
				absent: new Set([...oldAbsent, ...newAbsent]),
			});
			this.incrementWordCounter();
			return;
		} else {
			return;
		}
	}

	handleDelete() {
		if (this.state.currLetter>0) {
			const currLetter = this.state.currLetter-1;
			const currWord=this.state.currWord;
			const newWords = {...this.state.words};
			newWords[currWord].letters[currLetter]="";
			this.setState({words: newWords, currLetter: currLetter});

		}
	}

	handleKeyUp = (event) => {
		// 'DELETE' key
		if (event.keyCode === 8) {
			this.handleDelete();
		}
		// 'ENTER' key
		else if (event.keyCode === 13) {
			this.handleEnter();
		}
		// lowercase letter key
		else if (event.keyCode>=65 && event.keyCode<=90) {
			this.handleLetter(event.key);
		}
	}

	keyboardCallback = (key: string) => {
		if (key==="ENTER") {
			this.handleEnter();
		} else if (key==="DEL") {
			this.handleDelete();
		} else {
        	this.handleLetter(key);
		}
    }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyUp', this.handleKeyUp)
  }



	render() {
		return (
		<Container>
		<div className="board">
		{
			Object.keys(this.state.words).map((key, index) => 
				<div className="row">
					<Word 
						key={this.state.words[key].letters}
						length={this.state.words[key].length}
						bindings={this.state.words[key].letters}
						checks={this.state.words[index].checks}
					/>
				</div>)
		}
		</div>
		{ this.state.gameOver && <div>{this.state.answer}</div>}
		<Keyboard callback={this.keyboardCallback} present={this.state.present} correct={this.state.correct} absent={this.state.absent}/>
		</Container>
		);
	}

};

