import React from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default class Home extends React.Component {

    state = {
        open: true
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const { open } = this.state;

        return (
            <>
                {/* <Modal open={open} center
                    onClose={this.onCloseModal}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                    styles={{
                        modal: {
                            animation: `${
                            open ? 'customEnterAnimation' : 'customLeaveAnimation'
                        } 500ms`,
                        },
                    }}
                >
                    <br/>
                    <br/>
                    <p>
                        בהתאם להנחיות משרד הבריאות אנו פתוחים במתכונת של השכרת חדרים, ופועלים לפי הנחיות התו הסגול.
                    </p>
                </Modal> */}

                <Images title="אכסניית טבריה" 
                        subtitle="הבית שלך בצפון"/>
                <Search/>

                <div className="sbest_price"
                    style={{
                        top: '281px',
                        left: '5px'
                    }}/>
                <div className="best_price"
                    style={{
                        top: '360px',
                        right: '5px',
                        height: '240px',
                        width: '240px',
                        position: 'absolute'
                    }}/>

                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}