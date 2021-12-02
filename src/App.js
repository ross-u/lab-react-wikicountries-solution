import './App.css';
import { Routes, Route } from 'react-router-dom';

import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <CountriesList countriesData={countriesData} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
