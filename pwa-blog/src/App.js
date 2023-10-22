// import logo from './logo.svg';
import './App.css';
import { Navbar,Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <nav> <Link to="/">Home</Link></nav>
           <nav><Link to="/users">Users</Link></nav>
           <nav> <Link to="/about">About</Link></nav>

          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route Component={About} path='/about'></Route>
      <Route Component={Users} path='/users'></Route>
      <Route Component={Home} path='/'></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
