import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import './App.css';

import ListAll from './components/ListAll';
import Main from './components/Main';
import MenuNavBar from './components/helpers/MenuNavBar';
import ViewOnlyCountry from './components/ViewOnlyCountry';

function App() {
  const urlApi = 'http://192.168.1.36:8000'
  const [onlyCountry, setOnlyCountry] = useState('')

  const vOnlyCountry = (country) => {
    setOnlyCountry(country)
  }

  return (
    <div className="app alert-primary">
      <BrowserRouter>
        <MenuNavBar />
          <Container className="bg-light app-container" >
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/list' element={<ListAll urlApi={urlApi} vOnlyCountry={vOnlyCountry} />} />
                <Route path='/country' element={<ViewOnlyCountry urlApi={urlApi} onlyCountry={onlyCountry}/>} />
            </Routes>
          </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
