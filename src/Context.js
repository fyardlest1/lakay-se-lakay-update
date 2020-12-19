import React, { Component } from 'react';
import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        isLoading: true
    }

    //getData
    componentDidMount() {
        const rooms = this.formatData(items)
        const featuredRooms = rooms.filter(room => room.featured === true)
        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, isLoading: false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)

            let room = {...item.fields, images, id }
            return room
        })
        return tempItems
    }

    getRooms = (slug) => {
        let tempRooms = [...this.state.rooms]
        const newRoom = tempRooms.find(room => room.slug === slug)
        return newRoom
    }

    render() {
        return (
            <RoomContext.Provider value={
                {
                    ...this.state,
                    getRooms: this.getRooms
                }
            }>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {
                    (value) => {
                        <Component {...props} context={value} />
                    }
                }
            </RoomConsumer>
        ) 
    }
}

export {RoomContext, RoomProvider, RoomConsumer};