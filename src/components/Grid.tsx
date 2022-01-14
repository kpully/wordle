import React, {Container} from 'react';
import '../App.css';
import Word from './Word.tsx';

type GridProps = {
	width: int;
	height: int;
}



const Grid = (props: GridProps) => {
	const [rows, setRows] = React.useState([...Array(props.height)].map((x, i) => <Word length={props.width} key={i} letter={props.bindings[i]}/>));



	return (
		<div className="row">
		{rows}
		</div>
		);

};

export default Grid;