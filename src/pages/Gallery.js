import React, { Component } from 'react'
import Gallerys from '../components/Gallerys';
import Images from '../components/Images';

export default class Gallery extends Component {    

    state = {
        isOpen: false
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <Images title="גלריה" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
                />
                <Gallerys/>
            </>
        );
    }
}