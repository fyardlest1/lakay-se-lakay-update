import React from 'react'
import HeroComponent from './../components/HeroComponent';
import BannerComponent from './../components/BannerComponent';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <HeroComponent>
            <BannerComponent title='404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </BannerComponent>
        </HeroComponent>
    )
}

export default ErrorPage

