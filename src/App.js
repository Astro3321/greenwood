import React from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return <Container fluid>
    <Router>
      <AuthProvider>
		  <Routes>
				<Route path="/" element={}></Route> {/* Home */}
				<Route path="/login" element={}></Route> {/* Login */}
				<Route path="/signup" element={}></Route> {/* Signup */}
		  </Routes>
	  </AuthProvider>
    </Router>
  </Container>
}

export default App;
