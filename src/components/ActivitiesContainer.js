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
                        {/* <ActivitiesList rooms={restActivities}/> */}
                        {/* <ActivitiesList rooms={waterActivities}/> */}
                        <ActivitiesList rooms={attractionActivities}/>
                    </>
                );
            }}
        </ActivityConsumer>
    );
}