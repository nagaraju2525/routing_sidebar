
import './App.css';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Content from './content';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div id="layoutSidenav">
       <Sidebar></Sidebar>
       <Content></Content>
       
      </div>
    </Router>
  );
}

export default App;
