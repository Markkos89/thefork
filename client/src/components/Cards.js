import React from 'react'
import Card from './OneCard'

const Cards = ({ restaurants }) => {
    return (
        <>
            {restaurants.map((resto) => <Card key={resto.id} resto={resto} />)}
        </>
    )
}

export default Cards
