import React, { Component } from 'react'
import TitleCompnent from './TitleCompnent'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class ServicesComponent extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'cocktails gratuits',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaHiking />,
                title: 'randonnée',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaBeer />,
                title: 'bière la plus forte',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
        ]
    }
    render() {
        const listServices = this.state.services.map((service, index) => {
            return (
                <article key={index} className='service'>
                    <span>{service.icon}</span>
                    <h6> {service.title} </h6>
                    <p> {service.info} </p>
                </article>
            ) 
        })
        return (
            <section className='services'>
                <TitleCompnent title='services' />
                <div className="services-center">
                    {listServices}
                </div>
            </section>
        );
    }
}

export default ServicesComponent;