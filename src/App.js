import './App.css';
import Nav from './Components/Nav';
import Route from './Components/Routing/Routes'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Nav />
    <Route />
    </Router>
    </>
  );
}

export default App;