import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {

    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,
        minPrice, maxPrice, minibar, tv} = context;
// get unique types
    let types = getUnique(rooms,'type');
// add all
    types = ['הכול', ...types];
// map to jsx
    types = types.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="חיפוש חדר" />
            <form className="filter-form">
                {/*select type  */}
                <div className="form-group">
                    <label htmlFor="type">סוג החדר</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange} >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/*guests   */}
                <div className="form-group">
                    <label htmlFor="capacity">מספר אורחים</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guests  */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">‎עד מחיר ₪{price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                        style={{  direction: 'ltr'}}
                    />
                </div>
                {/* end of room price */}
                {/* extras  */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="minibar"
                        id="minibar"
                        checked={minibar}
                        onChange={handleChange}
                        />
                        <label htmlFor="minibar">מיני בר</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="tv"
                        id="tv"
                        checked={tv}
                        onChange={handleChange}
                        />
                        <label htmlFor="tv">טלוויזיה בחדר</label>
                    </div>
                </div>
                {/* end of extras  */}
        </form>
        </section>
    );
}
