import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormContainer from './containers/FormContainer'
import Cards from './components/Cards'

export default function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <FormContainer setRestaurants={setRestaurants} />
      {restaurants.length > 0 && <Cards restaurants={restaurants} />}
    </>
  );
}