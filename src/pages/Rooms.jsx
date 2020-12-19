import React from 'react'
import HeroComponent from './../components/HeroComponent';
import BannerComponent from './../components/BannerComponent';
import { Link } from 'react-router-dom';
import RoomContainer from './../components/RoomContainer';

const Rooms = () => {
    return (
        <React.Fragment>
            <HeroComponent hero='roomsHero' >
                <BannerComponent title='our rooms'>
                    <Link to='/' className='btn-primary' >return home</Link>
                </BannerComponent>                
            </HeroComponent>
            <RoomContainer />
        </React.Fragment>
    )
}

export default Rooms
