import React from 'react';
import Cell from './Cell.tsx';


type WordProps = {
	key: int;
	length: int;
	cellSize: int;
	bindings: { [key: number]: string } ;
}

interface ICell {
	key: int;
	letter: string;
}

const Word = (props: WordProps) => {	
	return (
		<React.Fragment>

		{
			Object.keys(props.bindings).map((key, index) => <Cell key={key} letter={props.bindings[key]} />)
		}
		</React.Fragment>
		);

};

export default Word;
