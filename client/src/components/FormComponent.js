import React from 'react'
import './FormStyle.css'

function FormComponent({ handleSubmit, onSubmit, register }) {
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="flex-outer">
                        <li>
                            <label htmlFor="coor_x">Coord X</label>
                            <input type="text" id="coor_x" name="coor_x" placeholder="Ingrese Coord. X aquí" ref={register} />
                        </li>
                        <li>
                            <label htmlFor="coor_y">Coord Y</label>
                            <input type="text" id="coor_y" name="coor_y" placeholder="Ingrese Coord. Y aquí" ref={register} />
                        </li>
                        <li>
                            <label htmlFor="max_results">Max Results</label>
                            <input type="text" id="max_results" name="max_results" placeholder="Ingrese la cantidad máxima de resultados" ref={register} />
                        </li>
                        <li>
                            <select name="sort_by" ref={register} className="form-control" style={{ width: "auto" }}>
                                <option value="">NINGUNO</option>
                                <option value="name">ORDENAR POR NOMBRE</option>
                                <option value="rating">ORDENAR POR RELEVANCIA</option>
                            </select>
                        </li>
                        <li>
                            <button type="submit" className="btn btn-primary">FILTRAR</button>
                        </li>
                    </ul>
                </form>
            </div>
        </>
    )
}

export default FormComponent
