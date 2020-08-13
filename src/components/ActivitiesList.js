import React from "react";
import Activity from "./Activity";

export default function ActivitiesList({ rooms }) {

    if (rooms.length === 0) {
        return (
        <div className="empty-search">
            <h3>unfortunately no rooms 
            matched your search parameters</h3>
        </div>
        );
    }

    return (
        <section className="activitylist">
        <div className="activitylist-center">
            {rooms.map(room => {
            return <Activity key={room.id} room={room} 
            />;
            })}
        </div>
        </section>
    );
}
