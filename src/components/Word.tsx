import { useState, useEffect } from 'react';
import '../App.css';

import React from 'react';
import Cell from './Cell.tsx';


type WordProps = {
	key: number;
	length: number;
	cellSize: number;
	checks: string[];
	bindings: { [key: number]: string } ;
}


const Word = (props: WordProps) => {
	const [checks, setChecks] = React.useState(props.checks);

	 
useEffect(() => {    
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
