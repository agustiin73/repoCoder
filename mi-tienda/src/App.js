import './App.css';


//import 'bootstrap/dist/css/bootstrap'
//***  COMPONENTES ***/

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header.js'


function App() {
  return (
    <div className="App">
          <Header/>
          <ItemListContainer/>
    </div>
  );
}

export default App;
