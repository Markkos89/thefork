import React from 'react'
import useForm from 'react-hook-form'

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

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