import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({context}) {
    const { isLoading, sortedRooms, rooms } = context
    
    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)



// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading';

// const RoomContainer = () => {
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
