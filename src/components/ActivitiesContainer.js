import React from 'react'
import ActivitiesList from './ActivitiesList';
import {ActivityConsumer} from '../contextActivities';
import Loading from './Loading';

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
                        <h5>פעילויות מים</h5>
                        <ActivitiesList rooms={waterActivities}/>
                        <h5>מקומות מרבץ</h5>
                        <ActivitiesList rooms={restActivities}/>
                        <h5>אטרקציות שוות</h5>
                        <ActivitiesList rooms={attractionActivities}/>
                    </>
                );
            }}
        </ActivityConsumer>
    );
}