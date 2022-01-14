import React, { useState, useEffect } from 'react';
import Grid from './Grid.tsx';
import { Container} from "react-bootstrap";
import Keyboard from './Keyboard.tsx';


const Board = (props) => {
	const [curr, setCurr] = React.useState(0);
	const [bindings, setBindings] = React.useState({});

	const incrementCounter = () => {
		console.log("incrementing counter");
		setCurr(prevCurr => prevCurr+1);
	}


	const handleKeyUp = (event) => {
		console.log("event occurred!");
		incrementCounter();

		console.log(event.key);
		console.log("curr="+curr);
		// console.log(bindings);
		// const newBindings=bindings;
		// console.log(newBindings);
		// newBindings[prevCurr] = event.key
		// setBindings({...newBindings});
	};


	const registerRows = (rows) => {
		setRows(rows);
	}

	const initBindings = () => {
		console.log("setting bindings...");
		var newBindings= {};
		for (let i=0; i<25; i++) {
			newBindings[i] = '';
		}	
		setBindings(newBindings);
	
	}

	useEffect(() => {
		initBindings();
		document.addEventListener('keyup', handleKeyUp);
	}, []);


	return(
		<Container>
		<div className="board">
			<Grid width={5} height={5} bindings={bindings}/>
			</div>
		<div>{curr}</div>
		<Keyboard />
		</Container>
);
};


export default Board;