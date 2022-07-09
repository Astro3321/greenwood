import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./components/Home"

export default function App() {
	const fontStyles = {
		fontSize: "1.3rem", 
		fontWeight: "bold"
	}

	return (
	<Container fluid>
		<Router>
			<AuthProvider>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container style={fontStyles}>
						<Navbar.Brand href="/">GreenWood</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/">About</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="/login">Login</Nav.Link>
								<Nav.Link eventKey={2} href="/signup">
									SignUp
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					{/* <Route path="/login" element={}></Route> Login */}
					{/* <Route path="/signup" element={}></Route> Signup */}
				</Routes>
			</AuthProvider>
		</Router>
	</Container>
	)
}