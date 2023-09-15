import React from 'react';
//import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


// Components
import {App} from "./components/App";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
		, document.getElementById('root')
	);

