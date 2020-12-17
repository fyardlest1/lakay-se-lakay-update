import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

const Loading = () => {
    return (
        <div className='loading'>
            <h4>Room data loading...</h4>
            <img src={loadingGif} alt="Loding page"/>
        </div>
    )
}

export default Loading
