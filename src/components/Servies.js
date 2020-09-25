import React, { Component } from 'react'
import Title from './Title';
import {FaUtensils,FaAngellist, FaSmileBeam, FaMapMarked} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaUtensils/>,
                title:"מטבח משותף מאובזר וביתי"
            },
            {
                icon:<FaAngellist/>,
                title:"גג עם נוף פנורמי לכנרת"
            },
            {
                icon:<FaSmileBeam/>,
                title:"צוות מנוסה ואדיב"
            },
            {
                icon:<FaMapMarked/>,
                title:"מיקום מרכזי"
            },
            /* 
            {
                icon:<FaAnchor/>,
                title:"אטרקציות במחירים מוזלים"
            },           
            {
                icon:<FaWifi/>,
                title:"WiFi"
            },            
            {
                icon:<FaRegMoneyBillAlt/>,
                title:"כספומט"
            },            
            {
                icon:<FaDice/>,
                title:"חדר פנאי עם סנוקר"
            },
            {
                icon:<FaTv/>,
                title:"טרקלין טלוויזיה"
            },
            {
                icon:<FaBook/>,
                title:"ספריה"
            },
            {
                icon:<FaPuzzlePiece/>,
                title:"משחקי לוח ופאזלים"
            },
            {
                icon:<FaCoffee/>,
                title:"פינת קפה"
            },*/
        ]
    }
    render() {
        return (
            <>
            <section className="empty-services">
                {/* <Title title="אז איך זה עובד?"/>  */}
                <h6>אנחנו באכסניית טבריה מציעים יחידות אירוח מודרניות ונעימות, למטיילים בתקציב מוגבל.</h6>
                <h6>תוכלו ליהנות אצלנו מחדר פנאי עם סנוקר, משחקי לוח ופאזלים, וטרקלין טלוויזיה. אינטרנט אלחוטי זמין בחינם בכל השטח, ויש טרסת גג עם נוף מטריף לכנרת ולהרי הגולן. ברים, מסעדות וחופים נמצאים כולם בסביבה הקרובה, והצוות האדיר שלנו תמיד יוכל להמליץ לכם על המסלולים הטובים ביותר לטיולים באזור!</h6>

                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {return (
                            <article key={index}>
                                <span className="icon-services">{item.icon}</span>
                                <h6 className="h6-services">{item.title}</h6>
                            </article>
                        )}
                    )}
                </div>
            </section>
            </>
        );
    }
}
