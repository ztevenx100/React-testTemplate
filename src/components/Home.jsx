import React, {Fragment}  from 'react';
import {Row, Col} from 'react-bootstrap';
// css
import './css/home.css'

export function Home(){
	
	var pathCaratulas = "img/jpg/caratulas/";
	var pathInicioPng = "img/png/inicio/";
	var pathInicioGif = "img/gif/inicio/";
	
	return (
		<Fragment>
		<Row style={{padding: "0px", scrollbarGutter: "stable"}}>
			<Col sm={12} className='bg-dark' style={{padding: "50px"
			, backgroundImage: " url(" + pathCaratulas + "vg-dmc3.jpg )"
			, backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
				<Row className='bg-dark' style={{height: ""}}>
					<Col sm={3} className='px-4 py-5' style={{}}>
						<div className='imgItem' style={{backgroundColor: "#FFF", backgroundImage: " url(" + pathInicioGif + "ini01.gif )", zIndex: "2", height: "180px", width: "180px"}}>
						</div>
					</Col>
					<Col className='text-light' sm={9} style={{padding: "20px 20px"}}> 
						<h3>Bienvenido!</h3>
						<h6 style={{textAlign: "justify"}}>
							<strong style={{ color: "#FFF"}}>
								Welkom - Willkommen - Herzlich willkommen - Welkomma - Bienvenido - Marhaban - Ahlan - Welkum - 
							</strong>
							<strong style={{ color: "#DDD"}}>
								Ongi etorri - Swagata - Ansuf yiswen - Yisek - Ani kié - Degemer loco - Estera Dagemer - Dobre doshŭl - 
							</strong>
							<strong style={{ color: "#BBB"}}>
								Benvinguts - Ulihebisdi - Huān yíng - Karibu - Eoso eoseyo - Bonavinuta - Bem-vindo - Benvenguda - 
							</strong>
							<strong style={{ color: "#999"}}>
								Bel bonjou - Bienvini - Ben vini - Benévolo - Dobrodošli Velkommen - Bienvenidos - Bonvenon - Welkom - 
							</strong>
							<strong style={{ color: "#FFF"}}>
								Wìllkòmme - Binvignut - Fàilte - Benvido - Mikouabô - Kalos irthate - Swaagat - üdvözlöm - Selamat datang - 
							</strong>
							<strong style={{ color: "#DDD"}}>
								Velkomin - Benvenuti - L'aaslama - Som svakoum - Drumbaca - Benènnidu - Benvenguda - Gnindi ton hap - 
							</strong>
							<strong style={{ color: "#BBB"}}>
								Boyeyi bolamu - Sveiki atvykę - Selamat datang - Swagatham - Tonga soa - Merhba - Haere mai - Miawezon - 
							</strong>
							<strong style={{ color: "#999"}}>
								Ne y waoongo - Welkom - Namaste - Velkommen - Benvenguts - Khush amdeed - Saasriyakaal - Buen bini - 
							</strong>
							<strong style={{ color: "#FFF"}}>
								Khoshumadi - Witajcie - Witamy - Beni benìu - Mauya - Bhali karay aaya - Vitame vás - Vitajte - Dobrodošli - 
							</strong>
							<strong style={{ color: "#DDD"}}>
								Härzliche wöikomme - Karibuni - Tuloy po kayo - Maeva - Manava - Nalvaravu - Rahim itegez - Vítejte - Swagatham - 
							</strong>
							<strong style={{ color: "#BBB"}}>
								Yindii ton rap - Hosgeldiniz - Laskavo prosymo - Xin chào - Bénvnou - Bénvnowe - Wilicome - 
							</strong>
							<strong style={{ color: "#999"}}>
								Diarama - Wilkum
							</strong>
						</h6>
					</Col>
				</Row>
			</Col>
		</Row>
		<Row style={{}}>
			<Col style={{padding: "50px"}}>
				<Row className='p-3' style={{backgroundColor: "#0008"}}>
					<Col sm={3} className=''>
						<div className='imgItem' style={{backgroundImage: " url(" + pathInicioPng + "ini01.png )", height: "180px", width: "180px", zIndex: "2", border: "2px solid #FFF" }}>
						</div>
					</Col>
					<Col sm={9} className='bg-dark text-light d-flex align-items-center ' style={{padding: "20px 20px", borderRadius: "5px"}}>
						<div className='px-2'>
							<h3>¿Por que existe esta pagina?</h3>
							<h6>Este es un ejercicio de practica utilizando <strong>React</strong> </h6>
						</div>
						<div className='px-2'>
							<h3>¿Que puedes encontrar aqui?</h3>
							<h6>En esta pagina puedes ver dos apartados principales: </h6>
							<h6>la primera consta de un <strong>perfil</strong> ambientado en videojuegos</h6>
							<h6>y el segundo consta de un <strong>museo</strong> que seria una demostracion de mi cuarto</h6>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
		</Fragment>
	);
}

export default Home;