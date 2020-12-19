import React from 'react'
import RoomsComponent from './RoomsComponent';


const RoomsList = ({rooms}) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>malheureusement aucune chambre ou maison ne correspond à vos paramètres de recherche</h3>
            </div>
        )
    }
    return (
        <section className='roomslist'>
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return (
                            <RoomsComponent key={item.id} room={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
