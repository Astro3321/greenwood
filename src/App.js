import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./components/Home"
// import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"
// import About from "./components/About"
import Assessment from "./pages/Assessment/Assessment"
import UpdateProfile from "./components/UpdateProfile"
import RecentTest from "./components/RecentTest"
import Result from "./pages/Result/Result"
import OrgSignup from "./components/OrgSignup"
import OrgProfile from "./components/OrgProfile"
import Model from "./components/Model"
import {  Dropdown } from "react-bootstrap"
// import View from "./components/View"
import AutismModel from "./pages/Model/AutismModel"
import "./pages/Assessment/Assessment.css"

export default function App() {
	const fontStyles = {
		fontSize: "1.3rem", 
		fontWeight: "bold" 
	}

	return (
	<Container fluid>
		<Router>
			<AuthProvider>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height: "5rem",backgroundColor: "black"}}>
					<Container style={fontStyles}>
						<Navbar.Brand href="/" className="mlogo" >GreenWood</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/about">About</Nav.Link>
								<Dropdown>
									<Dropdown.Toggle variant="Dark" className="mt-2 md-4" id="dropdown-basic" style={{ backgroundColor: "#017e72", fontWeight: 'bold', fontSize:"15px", marginLeft:"17px", color:"white", marginBottom:"2px"}}>
										Test
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/test/basic">Basic Test</Dropdown.Item>
										<Dropdown.Item href="/test/advanced/model">Advanced Test</Dropdown.Item>
										
									</Dropdown.Menu>
								</Dropdown>
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
					<Route path="/login" element={<Login />}></Route> Login
					<Route path="/signup" element={<Signup />}></Route> Signup
					<Route path="/profile" element={<OrgProfile/>}></Route> Profile
					{/* <Route path="/about" element={<About />}></Route> About */}
					<Route path="/test/basic" element={<Assessment />}></Route> Assessment
					<Route path="/update-profile" element={<UpdateProfile/>}></Route> UpdateProfile
					<Route path="/tests/recent" element={<RecentTest/>}></Route> Recent Test
					<Route path="/result" element={<Result />}></Route> Result
					{/* <Route path="/View" element={<View />}></Route> Result */}
					<Route path="/OrgSignup" element={<OrgSignup/>}></Route> Organiation signup
					<Route path="/test/advanced/model" element={<Model/>}></Route> ML Model
					<Route path="/test/advanced/Autism-Model" element={<AutismModel />}></Route> Autism Model
					{/* <Route path="/profile/organizaton" element={<OrgProfile/>}></Route> Organisation profile */}
				</Routes>
				<Footer />
			</AuthProvider>
		</Router>
		
	</Container>
	)
}

