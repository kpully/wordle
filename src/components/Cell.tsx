import React from 'react';
import '../App.css';

type CellProps = {
	key: string;
	letter: string;
	cellSize: int;
}

const Cell = (props: CellProps) => {
	const [letter, setLetter] = React.useState(props.letter);


	return (
		<div className="cell" style={{width: "50px", height: "50px"}}>
		<div className="cell__letter">{letter}</div>
		</div>
		);
};
export default Cell;