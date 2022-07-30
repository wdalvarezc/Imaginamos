import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import Inicio from './components/inicio';
import Carrito from './components/carrito';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio/> }></Route>
          <Route path='/Compras' element={<Carrito /> }></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
