import React from 'react'
import Services from '../components/Servies';
import Images from '../components/Images';

export default function Amenities() {
    return (
        <>
            <Images title="השירותים שלנו" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
            />
            <Services/>
        </>
    )
}
