import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Container, Row, Col } from "react-bootstrap";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Planets} from "./component/Planets.js";
import { Characters } from "./component/Characters.js";

//create your first component/
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>

					<Row>
						<Col>
							<Navbar />
						</Col>
					</Row>

					<Row>
						<Col>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/demo" element={<Demo />} />   
								<Route path="/planets2" element={<Planets />} /> 

								<Route path="/characters/:theid" element={<Single />} />
								<Route path="*" element={<h1>Not found!</h1>} />
							</Routes>
						</Col>
					</Row>


					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
