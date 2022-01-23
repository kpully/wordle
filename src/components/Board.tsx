import React, { useState, useEffect } from 'react';
import Grid from './Grid.tsx';
import { Container} from "react-bootstrap";
import Keyboard from './Keyboard.tsx';
import ReactDOM from 'react-dom';
import Word from './Word.tsx';
import {generateWord, checkGuess} from '../utils/WordGenerator.tsx';



interface IWord {
	length: int;
	letters: string[];
	checks: string[];
}

function initWords(x: int) {
	let words = {};
	words[0] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[1] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[2] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[3] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[4] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}
	words[5] = {length: 5, letters: ["", "", "", "", ""], checks: ["", "", "", "", ""]}

	return words;
}

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.state = {	curr: 0,
						words: initWords(5),
						currWord: 0,
						currLetter: 0,
						answer: generateWord(),
						answerFound: false,
						gameOver: false
					}
		// console.log("constructor");
		console.log(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.incrementLetterCounter = this.incrementLetterCounter.bind(this);
		this.incrementWordCounter = this.incrementWordCounter.bind(this);
		this.decrementLetterCounter = this.decrementLetterCounter.bind(this);
		this.keyboardCallback = this.keyboardCallback.bind(this);

	}

	incrementLetterCounter() {
		if (this.state.currLetter < 5) {
		console.log("incrementing letter counter");
		this.setState({currLetter: this.state.currLetter+1});
		}	
	}

	decrementLetterCounter() {
		if (this.state.currLetter>0) {
			console.log("decrementing letter counter");
			const currLetter = this.state.currLetter-1;
			const currWord=this.state.currWord;
			const newWords = {...this.state.words};
			newWords[currWord].letters[currLetter]="";
			this.setState({words: newWords, currLetter: currLetter});

		}
	}

	incrementWordCounter() {
		// increments word counter annd reset letter counter
		if (this.state.currWord < 5) {
			console.log("incrementing word counter");
			this.setState({currWord: this.state.currWord+1, currLetter: 0});
		} else {
			this.setState({gameOver: true});
		}
	}

	handleKeyUp = (event) => {
		// 'DELETE' key
		if (event.keyCode === 8) {
			this.decrementLetterCounter();
		}

		// 'ENTER' key
		else if (event.keyCode === 13) {
			if (this.state.currLetter==5) {
				// call checker function
				const results = checkGuess(this.state.answer,this.state.words[this.state.currWord].letters);
				const newWords = {...this.state.words};
				const currWord=this.state.currWord;
				newWords[currWord].checks=results;
				this.setState({words: newWords});
				this.incrementWordCounter();
				return;
			} else {
				return;
			}
		}
		// lowercase letter key
		else if (event.keyCode>=65 && event.keyCode<=90) {
			const currLetter=this.state.currLetter;
			if (currLetter < 5) {
				const currWord=this.state.currWord;
				const newWords = {...this.state.words};
				newWords[currWord].letters[currLetter]=event.key;
				this.setState({words: newWords});
				this.incrementLetterCounter();
			}
		}
	}

	keyboardCallback = (letter: string) =>{
        this.setState({name: childData})
    }

  componentDidMount() {
  	console.log("add event listener");
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
  	console.log("remove");
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
		<Keyboard callback={this.keyboardCallback}/>
		</Container>
		);
	}

};

