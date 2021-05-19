import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from'./pages/main';
import {Route, BrowserRouter} from 'react-router-dom';
import Cart from './Context/Store'

function App() {
  return (
    <div className="App">
      <Cart>
        <Main/>
      </Cart>
    </div>
  );
}

export default App;
