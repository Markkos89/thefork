import React from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import FormComponent from '../components/FormComponent'

const FormContainer = ({ setRestaurants }) => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/search?sort_by=${data.sort_by}&coor_x=${data.coor_x}&coor_y=${data.coor_y}&max_results=${data.max_results}`);
                console.log(response.data);
                setRestaurants(response.data.restaurants)

            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }

    return (
        <FormComponent handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />
    )
}

export default FormContainer
