import React from 'react';
import ThreeDRotation from '@mui/icons-material/Delete';


type KeyboardProps = {
	callback: (string) => void,
}

const Keyboard = (props: KeyboardProps) => {
	const [used, setUsed] = React.useState([]);

	const keyClick = (letter: string) => {
		console.log("keyClick="+letter);
		props.callback(letter);
	}


	return (
		<div>
		<div className="keyboard__row1">
			<button className="keyboard__key" onClick={() => keyClick("q")}>Q</button>
			<button className="keyboard__key" onClick={() => keyClick("w")}>W</button>
			<button className="keyboard__key" onClick={() => keyClick("e")}>E</button>
			<button className="keyboard__key" onClick={() => keyClick("r")}>R</button>
			<button className="keyboard__key" onClick={() => keyClick("t")}>T</button>
			<button className="keyboard__key" onClick={() => keyClick("y")}>Y</button>
			<button className="keyboard__key" onClick={() => keyClick("u")}>U</button>
			<button className="keyboard__key" onClick={() => keyClick("i")}>I</button>
			<button className="keyboard__key" onClick={() => keyClick("o")}>O</button>
			<button className="keyboard__key" onClick={() => keyClick("p")}>P</button>
		</div>
		<div className="keyboard__row2">
			<button className="keyboard__key" onClick={() => keyClick("a")}>A</button>
			<button className="keyboard__key" onClick={() => keyClick("s")}>S</button>
			<button className="keyboard__key" onClick={() => keyClick("d")}>D</button>
			<button className="keyboard__key" onClick={() => keyClick("f")}>F</button>
			<button className="keyboard__key" onClick={() => keyClick("g")}>G</button>
			<button className="keyboard__key" onClick={() => keyClick("h")}>H</button>
			<button className="keyboard__key" onClick={() => keyClick("j")}>J</button>
			<button className="keyboard__key" onClick={() => keyClick("k")}>K</button>
			<button className="keyboard__key" onClick={() => keyClick("l")}>L</button>
		</div>
		<div className="keyboard__row3">
			<button className="keyboard__key" onClick={() => keyClick("ENTER")}>ENTER</button>
			<button className="keyboard__key" onClick={() => keyClick("z")}>Z</button>
			<button className="keyboard__key" onClick={() => keyClick("x")}>X</button>
			<button className="keyboard__key" onClick={() => keyClick("c")}>C</button>
			<button className="keyboard__key" onClick={() => keyClick("v")}>V</button>
			<button className="keyboard__key" onClick={() => keyClick("b")}>B</button>
			<button className="keyboard__key" onClick={() => keyClick("n")}>N</button>
			<button className="keyboard__key" onClick={() => keyClick("m")}>M</button>
			<button className="keyboard__key" onClick={() => keyClick("DEL")}>DEL</button>

		</div>
		</div>

		);
};


export default Keyboard;