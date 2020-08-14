import React from 'react'
import ActivitiesList from './ActivitiesList';
import {ActivityConsumer} from '../contextActivities';
import Loading from './Loading';
import Title from './Title';

export default function RoomsContainer() {  
    return (
        <ActivityConsumer>
            {value => {
                const {loading, restActivities, waterActivities, attractionActivities} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <Title title="פעילויות מים"/> 
                        <ActivitiesList rooms={waterActivities}/>
                        <div className="sep"/>
                        <Title title="מקומות מרבץ"/> 
                        <ActivitiesList rooms={restActivities}/>
                        <div className="sep"/>
                        <Title title="אטרקציות שוות"/> 
                        <ActivitiesList rooms={attractionActivities}/>
                    </>
                );
            }}
        </ActivityConsumer>
    );
}