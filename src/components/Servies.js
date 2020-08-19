import React, { Component } from 'react'
import Title from './Title';
import {FaWifi,FaUtensils,FaParking,
    FaPuzzlePiece,FaDice,FaBook,FaTv,FaCoffee,
    FaSmileBeam,FaRegMoneyBillAlt,FaAngellist, FaAnchor} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaUtensils/>,
                title:"מטבח מאובזר"
            },
           {
                icon:<FaCoffee/>,
                title:"פינת קפה"
            },
            {
                icon:<FaAngellist/>,
                title:"גג עם נוף מטריף"
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
                icon:<FaParking/>,
                title:"חניה חינם"
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
                icon:<FaAnchor/>,
                title:"אטרקציות במחירים מוזלים"
            },
            {
                icon:<FaSmileBeam/>,
                title:"צוות מנוסה ואדיב"
            }
        ]
    }
    render() {
        return (
            <>
            <section className="empty-services">
                <Title title="אז איך זה עובד?"/> 
                <h6>אנחנו באכסניית טבריה מציעים יחידות אירוח מודרניות ונעימות, למטיילים בתקציב מוגבל.</h6>
                <h6>החדרים הפרטיים שלנו יכולים להכיל 2-4 אנשים. בחדרים הפרטיים השירותים והמקלחת הם בתוך החדר. יש לנו גם חדרים משותפים, שמכילים 8-10 אנשים. לכל חדר משותף יש שירותים ומקלחת פרטים, מחוץ לחדר.</h6>
                <h6>תוכלו ליהנות אצלנו ממטבח משותף מאובזר וביתי, חדר פנאי עם סנוקר, משחקי לוח ופאזלים, וטרקלין טלוויזיה. אינטרנט אלחוטי זמין בחינם בכל השטח, ויש טרסת גג עם נוף מטריף לכנרת ולהרי הגולן.  ברים, מסעדות וחופים נמצאים כולם בסביבה הקרובה, והצוות האדיר שלנו תמיד יוכל להמליץ לכם על המסלולים הטובים ביותר לטיולים באזור!</h6>
            </section>

            <section className="services">
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {return (
                            <article key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                            </article>
                        )}
                    )}
                </div>
            </section>
            </>
        );
    }
}
