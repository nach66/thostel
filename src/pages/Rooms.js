import React from 'react'
import RoomsList from '../components/RoomsList';
import {RoomConsumer} from '../contextRooms';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Title from '../components/Title';

export default function Rooms() {
    return (
        <>
        <RoomConsumer>
            {value => {
                const {loading, publicRooms, privateRooms} = value;
                if (loading) {
                    return <Loading/>;
                }
                return (
                    <>
                        <div className="sep"/>
                        <Title title="חדרים פרטיים"/> 
                        <section className="empty-services">
                            <h6>החדרים הפרטיים שלנו יכולים להכיל 1-4 אנשים. בחדרים הפרטיים השירותים והמקלחת הם בתוך החדר.</h6>
                        </section>
                        <RoomsList rooms={privateRooms}/>

                        <div className="sep"/>

                        <Title title="חדרים משותפים"/>
                        <section className="empty-services">
                            <h6>החדרים משותפים שלנו מכילים 4-10 אנשים. בחדרים משותפים עם 4 מיטות יש שירותים ומקלחת בתוך החדר, ובשאר יש שירותים ומקלחות פרטיים, מחוץ לחדר.</h6>
                        </section>
                        <RoomsList rooms={publicRooms}/>
                        <div className="sep"/>

                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
        </>
    );
}

/* function RoomsFilter() {
    return (
        <section className="btn-room-contain">
                <Link className="btn-primary2 room-btns"
                    style={{
                        paddingLeft: '23px',
                        paddingRight: '23px'
                    }}
                    to="/private" >לחדרים הפרטיים</Link>
                <Link className="btn-primary2 room-btns"
                    to="/public" >לחדרים המשותפים</Link>
        </section>
    );
} */