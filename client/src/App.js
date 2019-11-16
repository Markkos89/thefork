import React, { useEffect, useState } from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'

export default function App() {
  const { register, handleSubmit } = useForm()
  const [sabarnole, setSabarnole] = useState({})
  const onSubmit = data => {
    console.log(data)
    async function fetchData() {
      try {
        const response = await axios.get(`/api/search?sort_by=${data.sort_by}&coor_x=${data.coor_x}&coor_y=${data.coor_y}&max_results=${data.max_results}`);
        console.log(response);
        setSabarnole(response)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Coord X</label>
      <input name="coor_x" ref={register} />
      <label>Coord. Y</label>
      <input name="coor_y" ref={register} />
      <label>Max Results:</label>
      <input name="max_results" ref={register} />

      <select name="sort_by" ref={register}>
        <option value="rating">FILTRAR POR RELEVANCIA</option>
        <option value="name">FILTRAR POR NOMBRE</option>
      </select>
      <input type="submit" />
    </form>
  );
}