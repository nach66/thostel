import React, { Component } from 'react'
import OLMap from '../components/OLMap'
import Images from '../components/Images';

export default class Location extends Component {    
    render() {
        return (
            <>
            <Images title="מיקום והכוונה" 
                link="/"
                link_text="חזרה לעמוד הבית"
            />
            <OLMap/>
            </>
        );
    }
}
