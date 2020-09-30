import React from 'react'
import back from '../images/back.png'

export default function Webook() {
    return (
        <div>
            <img 
                alt="D"
                style={{
                    zIndex:'1',
                    height: '230px',
                    width: '230px',
                    position: 'absolute',
                    top: '430px',
                    right: '100px'
                }}
                src={back}
            />
        </div>
    )
}
