import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormContainer from './containers/FormContainer'
import Cards from './components/Cards'
import ShowTitle from './components/ShowTitle'

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
      {restaurants.length === 0 && <FormContainer setRestaurants={setRestaurants} />}
      {restaurants.length > 0 && <ShowTitle count={restaurants.length} />}
      {restaurants.length > 0 && <Cards restaurants={restaurants} />}
    </>
  );
}