import React, {Fragment}  from 'react';
//import ReactDOM from 'react-dom';
// Components
import {NavbarPage} from "./NavbarPage";
import {FooterPage} from "./FooterPage";
import {Home} from ".//Home"
//import Profile from "./components/pages/Profile"
//import {Museum} from "./components/pages/Museum"
import {Container, Row, Col} from 'react-bootstrap';
import { Route, Routes} from "react-router-dom"

export function App(){	
	
	return (
		<Fragment>
			<Container fluid className='bg-dark' style={{marginTop: "0px"}} >
				<Row>
					<Col style={{minHeight: "40px"}}>
						<NavbarPage />
					</Col>
				</Row>
				<Row>
					<Col>
					<Container fluid="lg" className='bg-light' style={{}}>
						<Routes>
							<Route path='/' element={<Home />} />
							{/*<Route path='/Profile' element={<Profile />} />*/}
							{/*<Route path='/Museum' element={<Museum />} />*/}
						</Routes>
					</Container>
					</Col>
				</Row>
				<Row>
					<Col className='p-0' style={{minHeight: "40px"}}>
						<FooterPage />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
}
