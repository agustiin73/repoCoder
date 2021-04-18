import logo from './logo.svg';
import './App.css';
import './components/Header/Header.css'

//import 'bootstrap/dist/css/bootstrap'
//***  COMPONENTES ***/
import NavBar from './components/Header/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">

        <div className="header">
          <h1>MI TIENDA</h1>
          <NavBar/>
        </div>
        <ItemListContainer/>
      

    </div>
  );
}

export default App;
