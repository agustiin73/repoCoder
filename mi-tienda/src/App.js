import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header/Header.js'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import Marcas from './components/Marcas/Marcas'
import Sucursales from './components/Sucursales/Sucursales'
import Contacto from './components/Contacto/Contacto'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
            <Route path="/item/:id"  >
              <ItemDetailContainer/>
            </Route>
            <Route path="/category" exact>
              <ItemListContainer title="Productos"/>
            </Route>
            <Route path="/Marcas" exact>
              <Marcas/>
            </Route>
            <Route path="/Sucursales" >
              <Sucursales/>
            </Route>
            <Route path="/Contacto" >
              <Contacto/>
            </Route>
            <Route path="/" exact>
              <ItemListContainer title="Productos"/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
   
  );
}

export default App;
