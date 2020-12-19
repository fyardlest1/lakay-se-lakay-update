import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading';
import { withRoomConsumer } from './../Context';

const RoomContainer = ({contex}) => {
    const { isLoading, sortedRooms, rooms } = contex
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            Hello from room container
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(RoomContainer)



// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { isLoading, sortedRooms, rooms } = value
//                     if (isLoading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from room container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer
