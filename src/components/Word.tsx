import React from 'react';
import Cell from './Cell.tsx';


type WordProps = {
	length: int;
	cellSize: int;
	letter: string;
}

const Word = (props: WordProps) => {
	const [word, setWord] = React.useState([...Array(props.length)].map((x, i) => <Cell key={i} letter={props.letter}/>));

	return (
		<div>{word}</div>
		);

};

export default Word;
