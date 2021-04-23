import './App.css';



//import 'bootstrap/dist/css/bootstrap'
//***  COMPONENTES ***/

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header.js'
import Contador from './components/ItemCount/ItemCount.jsx'

function App() {
  return (
    <div className="App">
          <Header/>
          <ItemListContainer greeting="Aqui van a estar los productos"/>
          <Contador/>
    </div>
  );
}

export default App;
