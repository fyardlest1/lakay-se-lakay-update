import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import RoomsComponent from './RoomsComponent';
import TitleCompnent from './TitleCompnent';

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { isLoading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            return <RoomsComponent key={room.id} room={room} />
        })
        return (
            <section className='featured-rooms'>
                <TitleCompnent title='featured rooms' />
                <div className="featured-rooms-center">
                    {isLoading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;