import './App.css';
import React, {useState} from 'react';
import Footer from './containers/App/Footer/Footer.js';
import Header from './containers/App/Header/Header.js';
import Home from './containers/App/Home/Home.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Container } from './components/Global';
import Catalogue from './containers/App/Catalogue/Catalogue';
import Item from './containers/Item/Item';
export let itemContext = React.createContext(null);

function App() {
  const [item, setItem] = useState();

  return (
    <itemContext.Provider value={{ item, setItem }} >
      <Container>
        <Header />
        <Routes>
          <Route path="/contacts" element={<div>Hello it is contacts</div>} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/item" element={<Item />} />
          <Route path="/cart" element={<div>Hello it is cart</div>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </itemContext.Provider>

  );
}

export default App;
