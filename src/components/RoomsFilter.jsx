import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import TitleCompnent from './TitleCompnent';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {
        handleChange, 
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
     } = context

    //  get unique types
    let types = getUnique(rooms, 'type')
    // add all
    types = ['all', ...types]
    // mat to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}> {item} </option>
    })
    
    //  get rooms capacity
    let people = getUnique(rooms, 'capacity')
    // mat to jsx
    people = people.map((item, index) => {
        return <option value={item} key={index}> {item} </option>
    })    

    return (
        <section className='filter-container'>
            <TitleCompnent title='rechercher des chambres' />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">type de chambre</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        { types }
                    </select>
                </div>
                {/* end of select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">nbre personnes</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        { people }
                    </select>
                </div>
                {/* end of guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">prix ${price}</label>
                    <input type="range" name='price'
                        min={minPrice} max={maxPrice} 
                        id='price' value={price}                        
                        onChange={handleChange}
                        className="form-control" />
                </div>
                {/* end of room price */}
                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">taille chambres</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" 
                            value={minSize} onChange={handleChange}
                            className="size-input"
                        />
                        <input type="number" name="maxSize" id="size" 
                            value={maxSize} onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of room size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" 
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" 
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">animaux</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter
