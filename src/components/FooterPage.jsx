import React, {Fragment}  from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components
import {Container, Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
// Style
import './css/footer.css'

export function FooterPage(){
	var pathIcons = "img/icons/png/";
	
	const divTooltip = (id,tooltip) => {
		return (<Tooltip id={id}>{tooltip}</Tooltip>);
	}
	
	return (
	<Fragment>
		<footer className="text-center text-white" style={{backgroundColor: "#000"}} >
			<Container className='py-4 mt-4'>
				<Row className='d-flex justify-content-center align-items-center p-3 bg-dark' style={{border: "2px solid #FFF", borderRadius: "5px"}}>
					<Col sm={12} className='p-2' style={{backgroundColor: "#000", borderBottom: "2px solid #FFF"}}>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','Facebook')}>
							<a href='https://www.facebook.com/pedrosteven.castiblanco/' target="_blank" rel="noopener noreferrer" >
								<img src={pathIcons + "5780556.png"} className="iconFooter ism1" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','Twitter')}>
							<a href='https://twitter.com/ztevenx100' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "5780575.png"} className="iconFooter ism2" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','Instragram')}>
							<a href='https://www.instagram.com/ztevenx100/' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "3271050.png"} className="iconFooter ism3" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','Whatsapp')}>
							<a href='https://www.facebook.com/pedrosteven.castiblanco/' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "5754358.png"} className="iconFooter ism4" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','Twitch')}>
							<a href='https://www.twitch.tv/ztevenx100' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "8261798.png"} className="iconFooter ism5" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','LinkedIn')}>
							<a href='https://www.linkedin.com/in/pedro-steven-castiblanco-piracoca-a54a1a164/' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "1187601.png"} className="iconFooter ism6" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','GitHub')}>
							<a href='https://github.com/ztevenx100' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "9168946.png"} className="iconFooter ism7" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={divTooltip('sm-1','GitLab')}>
							<a href='https://gitlab.com/pscastiblanco' target="_blank" rel="noopener noreferrer">
								<img src={pathIcons + "11292831.png"} className="iconFooter ism8" alt="item" style={{}} />
							</a>
						</OverlayTrigger>
					</Col>
					<Col>
						©2023 - Pedro Castiblanco
					</Col>
				</Row>
			</Container>
		</footer>
	</Fragment>
	);
}
