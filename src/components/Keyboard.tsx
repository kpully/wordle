import React, { useEffect } from 'react';

type KeyboardProps = {
	callback: (string) => void,
	absent: Set<string>,
	present: Set<string>,
	correct: Set<string>
}

const Keyboard = (props: KeyboardProps) => {
	const [correct, setCorrect] = React.useState(props.correct);
	const [absent, setAbsent] = React.useState(props.absent);
	const [present, setPresent] = React.useState(props.present);


	const keyClick = (letter: string) => {
		props.callback(letter);
	}

	const getKeyState = (letter: string) => {
		if (absent.has(letter)) {
			return "--ABSENT";
		} else if (correct.has(letter)) {
			return "--CORRECT";
		} else if (present.has(letter)) {
			return "--PRESENT";
		} else {
			return "";
		}
	}

	const actionFunction = (_absent: Set<string>, _present: Set<string>, _correct: Set<string>) => {
		setAbsent(_absent);
		setPresent(_present);
		setCorrect(_correct);
	}

	useEffect(() => {
		actionFunction(props.absent, props.present, props.correct);
	}, [props.absent, props.present, props.correct])


	return (
		<div>
		<div className="keyboard__row1">
			<button className={"keyboard__key"+getKeyState("q")} onClick={() => keyClick("q")}>Q</button>
			<button className={"keyboard__key"+getKeyState("w")} onClick={() => keyClick("w")}>W</button>
			<button className={"keyboard__key"+getKeyState("e")} onClick={() => keyClick("e")}>E</button>
			<button className={"keyboard__key"+getKeyState("r")} onClick={() => keyClick("r")}>R</button>
			<button className={"keyboard__key"+getKeyState("t")} onClick={() => keyClick("t")}>T</button>
			<button className={"keyboard__key"+getKeyState("y")} onClick={() => keyClick("y")}>Y</button>
			<button className={"keyboard__key"+getKeyState("u")} onClick={() => keyClick("u")}>U</button>
			<button className={"keyboard__key"+getKeyState("i")} onClick={() => keyClick("i")}>I</button>
			<button className={"keyboard__key"+getKeyState("o")} onClick={() => keyClick("o")}>O</button>
			<button className={"keyboard__key"+getKeyState("p")} onClick={() => keyClick("p")}>P</button>
		</div>
		<div className="keyboard__row2">
			<button className={"keyboard__key"+getKeyState("a")} onClick={() => keyClick("a")}>A</button>
			<button className={"keyboard__key"+getKeyState("s")} onClick={() => keyClick("s")}>S</button>
			<button className={"keyboard__key"+getKeyState("d")} onClick={() => keyClick("d")}>D</button>
			<button className={"keyboard__key"+getKeyState("f")} onClick={() => keyClick("f")}>F</button>
			<button className={"keyboard__key"+getKeyState("g")} onClick={() => keyClick("g")}>G</button>
			<button className={"keyboard__key"+getKeyState("h")} onClick={() => keyClick("h")}>H</button>
			<button className={"keyboard__key"+getKeyState("j")} onClick={() => keyClick("j")}>J</button>
			<button className={"keyboard__key"+getKeyState("k")} onClick={() => keyClick("k")}>K</button>
			<button className={"keyboard__key"+getKeyState("l")} onClick={() => keyClick("l")}>L</button>
		</div>
		<div className="keyboard__row3">
			<button className="keyboard__key" onClick={() => keyClick("ENTER")}>ENTER</button>
			<button className={"keyboard__key"+getKeyState("z")} onClick={() => keyClick("z")}>Z</button>
			<button className={"keyboard__key"+getKeyState("x")} onClick={() => keyClick("x")}>X</button>
			<button className={"keyboard__key"+getKeyState("c")} onClick={() => keyClick("c")}>C</button>
			<button className="keyboard__key" onClick={() => keyClick("v")}>V</button>
			<button className="keyboard__key" onClick={() => keyClick("b")}>B</button>
			<button className={"keyboard__key"+getKeyState("n")} onClick={() => keyClick("n")}>N</button>
			<button className={"keyboard__key"+getKeyState("n")} onClick={() => keyClick("m")}>M</button>
			<button className="keyboard__key" onClick={() => keyClick("DEL")}>DEL</button>

		</div>
		</div>

		);
};


export default Keyboard;