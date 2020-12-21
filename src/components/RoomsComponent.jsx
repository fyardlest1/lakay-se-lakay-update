import React from 'react'
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

const RoomsComponent = ({ room }) => {
    const { name, slug, images, price } = room
    return (
        <article className='rooms'>
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>par nuit</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
            </div>
            <p className='room-info'> {name} </p>
        </article>
    )
}

RoomsComponent.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default RoomsComponent
