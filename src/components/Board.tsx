import React from 'react';
import Grid from './Grid.tsx';
import { Container, Col, Row, Form } from "react-bootstrap";


const Board = (props) => {
	return(
		<Container>
		<div className="board">
			<Grid width={5} height={5}/>
			</div>
		</Container>
);
};


export default Board;