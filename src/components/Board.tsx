import React, { useState, useEffect } from 'react';
import Grid from './Grid.tsx';
import { Container} from "react-bootstrap";
import Keyboard from './Keyboard.tsx';
import ReactDOM from 'react-dom';
import Word from './Word.tsx';



interface IWord {
	length: int;
	letters: string[];
}

function initWords(x: int) {
	let words = {};
	words[0] = {length: 5, letters: ["", "", "", "", ""]}
	words[1] = {length: 5, letters: ["", "", "", "", ""]}
	words[2] = {length: 5, letters: ["", "", "", "", ""]}
	words[3] = {length: 5, letters: ["", "", "", "", ""]}
	// words[4] = {length: 5, letters: ["", "", "", "", ""]}

	return words;
}

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.state = {	curr: 0,
						words: initWords(5),
						currWord: 0,
						currLetter: 0
					}
		console.log("constructor");
		console.log(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.incrementLetterCounter = this.incrementLetterCounter.bind(this);
		this.incrementWordCounter = this.incrementWordCounter.bind(this);

	}

	incrementLetterCounter() {
		console.log("incrementing letter counter");
		this.setState({currLetter: this.state.currLetter+1});
	}

	incrementWordCounter() {
		console.log("incrementing word counter");
		this.setState({currWord: this.state.currWord+1});
	}

	handleKeyUp = (event) => {
		console.log("event occurred!");
		console.log(event.key);
		const currLetter=this.state.currLetter;
		const currWord=this.state.currWord;
		const newWords = {...this.state.words};
		newWords[currWord].letters[currLetter]=event.key;
		console.log(newWords);
		this.setState({words: newWords});
		this.incrementLetterCounter();
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
			Object.keys(this.state.words).map((key, index) => <div className="row"><Word key={this.state.words[key].letters} length={this.state.words[key].length} bindings={this.state.words[key].letters} /></div>)
		}
		</div>
		<div>{this.state.curr}</div>
		<Keyboard />
		</Container>
		);
	}

};

