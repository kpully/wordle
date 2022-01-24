import React from 'react';
import '../App.css';
import { useEffect } from 'react';

type CellProps = {
	key: string;
	letter: string;
	cellSize: int;
	check: string;
}

const Cell = (props: CellProps) => {
	const [letter, setLetter] = React.useState(props.letter);
	const [check, setCheck] = React.useState(props.check || "");

	const actionFunction = (newCheck) => {
		// console.log("cell actionfunction");
		// console.log("check="+newCheck);
		setCheck(newCheck);
	}
	 
useEffect(() => {    
	console.log("cell use effect");
	actionFunction(props.check);
  },[props.check]);



	return (
		<div className={"cell--"+check} style={{width: "70px", height: "70px"}}>
		<div className="cell__letter">{letter}</div>
		</div>
		);
};
export default Cell;