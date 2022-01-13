import React from 'react';
import Cell from './Cell.tsx';


type WordProps = {
	length: int;
	cellSize: int;
}

const Word = (props: WordProps) => {
	const [word, setWord] = React.useState([...Array(props.length)].map((x, i) => <Cell key={i}/>));

	return (
		<div>{word}</div>
		);

};

export default Word;
