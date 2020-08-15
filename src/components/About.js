import React from 'react'
import c from '../images/odot.jpg'
import Title from '../components/Title';
import { Parallax } from 'react-scroll-parallax';

export default function About() {
    return (
        <>
            <section className="empty-services">
                <Title title="מי אנחנו?"/> 
                <div className="abuot">
                    <article className="pic">
                        <img
                            src={c}
                            style={{
                                paddingbottom: '200px',
                                height: '240px',
                                width: '240px'                                    
                            }}>  
                        </img>
                    </article>
                    <article>
                    <h5>אכסניית טבריה הוקמה בשנת 2015, לאחר שהבנו שקיים חוסר במקומות אירוח למטיילים בצפון הארץ, מהם ניתן לצאת לטיולי יום ולחזור למקום ביתי ובטוח.</h5>
                    <h5>המיקום שלנו נוח ומרכזי: 3 דקות הליכה מתחנה מרכזית טבריה, 3 דקות הליכה מחופי הכנרת, ו30 דקות נסיעה ממגוון אטרקציות. יש חניה זמינה ומסעדות, שווקים וחנויות ממש ברחוב שלנו.</h5>
                    <h5>משפחות צעירות, צלמים, אוהבי גלישת רוח בכנרת, רוכבי אופניים, וכל אחד שחפצה נפשו לשכשך במי מעיין קרירים עם נוף עוצר נשימה תחת צל אקליפטוס גדול וותיק – הצוות האדיב והמנוסה שלנו ישמח לעזור לפי צרכיכם.</h5>
                    <h5>אנחנו רוצים להפוך אתכם ללקוחות VIP שלנו, ולכן שואפים להפוך את השהייה שלכם למהנה ונוחה. ההוסטל מעוצב בצורה נוחה וחדשנית, ובהתאם לתו הסגול.</h5>
                </article>
                </div>
            </section>
        </>
    )
}
