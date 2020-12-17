import React from 'react'
import HeroComponent from './../components/HeroComponent';
import BannerComponent from './../components/BannerComponent';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <HeroComponent hero='roomsHero' >
            <BannerComponent title='our rooms'>
                <Link to='/' className='btn-primary' >return home</Link>
            </BannerComponent>
        </HeroComponent>
    )
}

export default Rooms
