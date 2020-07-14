import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomConsumer} from '../context';
//import {withrRoomConsumer} from '../context';
import Loading from './Loading';

export default function RoomsContainer() {  
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}



/*
function RoomsContainer({context}) { 
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading/>;
    }                    
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    );
}

export default withrRoomConsumer(RoomsContainer);
*/






