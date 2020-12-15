import React from 'react'

const HeroComponent = ({ children, hero }) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

HeroComponent.defaultProps = {
    hero: 'defaultHero'
}

export default HeroComponent
