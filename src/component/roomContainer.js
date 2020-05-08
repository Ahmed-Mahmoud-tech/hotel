import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer, RoomConsumer} from '../Context';
import Loading from './Loading';

function RoomContainer({context}){
    const {loading, sortedRooms, rooms } = context;

                if(loading){
                    return <Loading />
                }
                return(
                    <>
                        <RoomsFilter rooms = {rooms}/>
                        <RoomsList rooms = {sortedRooms}/>
                    </>
                );

}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../Context';
// import Loading from './Loading';

// export default function roomsContainer() {
//     return (

//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms } = value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return(
//                     <div>
//                         hello from rooms Container
//                         <RoomsFilter rooms = {rooms}/>
//                         <RoomsList rooms = {sortedRooms}/>
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     )
// }
 