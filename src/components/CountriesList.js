import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // // Use data passed from the props
    // setCountries(countriesData);

    // Make a call to the API for the data
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesDataFromAPI = response.data;

      setCountries(countriesDataFromAPI);
    };

    fetchData();
  }, []);

  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
        {countries.map((oneCountry) => (
          <Link
            class="list-group-item list-group-item-action"
            to={'/' + oneCountry.alpha3Code}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
              width="50px"
            />
            <p>{oneCountry.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
