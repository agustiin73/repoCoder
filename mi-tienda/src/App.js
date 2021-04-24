import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header.js'


function App() {
  return (
    <div className="App">
          <Header/>
          <ItemListContainer greeting="Productos"/>

    </div>
  );
}

export default App;
