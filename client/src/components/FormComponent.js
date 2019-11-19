import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const FormComponent = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col>
            <div className="form-group row">
              <label htmlFor="coor_x" className="col-sm-1 col-form-label">X : </label>
              <div className="col-sm-1">
                <input name="coor_x" id="coor_x" ref={register({ required: true })} className="form-control" style={{ width: "70px" }} />
                {errors.coor_x && <span>Este campo es requerido.</span>}
              </div>
              <label htmlFor="coor_y" className="col-sm-1 col-form-label">Y : </label>
              <div className="col-sm-1">
                <input name="coor_y" id="coor_y" ref={register({ required: true })} className="form-control" style={{ width: "70px" }} />
                {errors.coor_y && <span>Este campo es requerido.</span>}
              </div>
              <label htmlFor="max_results" className="col-sm-2 col-form-label">Cant. de Resultados:</label>
              <div className="col-sm-1">
                <input name="max_results" id="max_results" ref={register({ required: true })} className="form-control" style={{ width: "70px" }} />
                {errors.max_results && <span>Este campo es requerido.</span>}
              </div>
              <select name="sort_by" ref={register} className="form-control" style={{ width: "auto" }}>
                <option value="">NINGUNO</option>
                <option value="name">ORDENAR POR NOMBRE</option>
                <option value="rating">ORDENAR POR RELEVANCIA</option>
              </select>
              <input type="submit" value="FILTRAR" className="btn btn-primary" />
            </div>            
          </Col>
        </Row>
      </Container>
    </form>
  )
}

export default FormComponent
