import React, {Fragment}  from 'react';
//import ReactDOM from 'react-dom';

import "bootstrap/dist/js/bootstrap.bundle.min";

// Components
import {Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { Link } from "react-router-dom"

export function NavbarPage(){
	
	return (
		<Fragment>
			<Navbar className="navbar-dark fixed-top " expand="lg" style={{backgroundColor: "#000F",borderBottom: "2px solid #C0C0C0"}}>
				<Navbar.Brand className='px-4' ><Link to="/" style={{color:"#FFF", textDecoration: "none"}} >Inicio</Link></Navbar.Brand>
				<Navbar.Toggle data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Offcanvas className="text-bg-dark" placement="end" tabIndex="-1" id="offcanvasDarkNavbar" 
					aria-labelledby="offcanvasDarkNavbarLabel" style={{width: "150px"}} >
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
						{/*<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>*/}
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav  className="justify-content-end flex-grow-1 pe-3">
							{/*<Link className='nav-link' to="/Profile" style={{color:"#FFF", textDecoration: "none"}}>Perfil</Link>*/}
							{/*<Link className='nav-link' to="/Museum" style={{color:"#FFF", textDecoration: "none"}}>Museo</Link>*/}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Navbar>
		</Fragment>
	);
}
