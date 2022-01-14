import { useState, useEffect } from 'react';
import '../App.css';

import React from 'react';
import Cell from './Cell.tsx';


type WordProps = {
	key: int;
	length: int;
	cellSize: int;
	checks: string[];
	bindings: { [key: number]: string } ;
}

interface ICell {
	key: int;
	letter: string;
}

const Word = (props: WordProps) => {
	const [checks, setChecks] = React.useState(props.checks);

	const actionFunction = (newChecks) => {
		setChecks([...newChecks]);
	}
	 
useEffect(() => {    
	// console.log("word use effect");
    setChecks(props.checks);
  },[props.checks]);

	return (
		<React.Fragment>

		{
			Object.keys(props.bindings).map((key, index) => <Cell check={checks[index]} key={key} letter={props.bindings[key]} />)
		}
		<div>

		</div>
		</React.Fragment>
		);

};

export default Word;
