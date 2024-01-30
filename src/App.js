import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
