import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from './components/Main';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Route path="/" exact component={Main} />

        <Route path="/home" component={Home} />
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
