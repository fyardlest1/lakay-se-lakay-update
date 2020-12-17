import React from 'react'
import HeroComponent from './../components/HeroComponent'
import BannerComponent from './../components/BannerComponent';
import { Link } from 'react-router-dom';
import ServicesComponent from './../components/ServicesComponent';
import FeaturedRooms from './../components/FeaturedRooms';

const Home = () => {
    return (
        <React.Fragment>
            <HeroComponent>
                <BannerComponent title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </BannerComponent>
            </HeroComponent>
            <ServicesComponent />
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
