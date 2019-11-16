import React from 'react'
import Card from './OneCard'

const Cards = ({ restaurants }) => {
    return (
        <ul>
            {restaurants.map((resto) => <Card key={resto.id} resto={resto} />)}
        </ul>
    )
}

export default Cards
