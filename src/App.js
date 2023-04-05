
import './App.css';

import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Hero from "./components/Hero"
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Animals from './components/Animals'
import { AnimalContextProvider } from './context/animal-context';

function App() {
  return (
    <div>
      <AnimalContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={[
        <Hero />,
        <About />,
        <Animals />,
      <Contacts />]}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </AnimalContextProvider>
    </div>
  );
}

export default App;
