import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import HeroComponent from './../components/HeroComponent';
import BannerComponent from './../components/BannerComponent';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext

    // componentDidMount() {
    //     //
    // }

    render() {
        const { getRooms } = this.context
        const room = getRooms(this.state.slug)
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </div>
            )
        }

        const { name, description, capacity, size, price, extras, breakfast, pet, images } = room

        return (
            <HeroComponent hero='roomsHero'>
                <BannerComponent title={`${name}`} room>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </BannerComponent>
            </HeroComponent>
        );
    }
}

export default SingleRoom;
