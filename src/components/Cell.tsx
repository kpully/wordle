import React from 'react';

import '../App.css';

type CellProps = {
	key: string;
	character: string;
	cellSize: int;
}


const Cell = (props: CellProps) => {
	const {character, setCharacter} = React.useState(props.character);
	return (
		<div className="cell" style={{width: "50px", height: "50px"}}>
		<div>{character}</div>
		</div>
		);
};
export default Cell;