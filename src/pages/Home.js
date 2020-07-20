import React from 'react'
import Title from '../components/Title';
import Images from '../components/Images';
import Services from '../components/Servies';
import FeaturedRoom from '../components/FeaturedRoom';
import OLMap from '../components/OLMap'
import Gallerys from '../components/Gallerys'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import c from '../images/finjan.jpg'

export default function Home() {
    return (
        <>
            <Images title="הבית שלך בצפון" 
                    subtitle="חדרים החל מ200 ש''ח"
                    link="/rooms"
                    link_text="לחדרים"
            />

            <section className="services">
            <Title title="למה להתארח דווקא אצלנו?"/> 
                <h5>המיקום שלנו נוח ומרכזי: 3 דקות הליכה מתחנה מרכזית טבריה, ו3 דקות הליכה מחופי הכנרת. </h5>
                <h5>יש חניה זמינה ומסעדות, שווקים וחנויות ממש ברחוב שלנו.</h5>
                <h5>שיפצנו ועיצבנו את ההוסטל לנוחות וביטחון, ואנו שומרים על זה.</h5>
                <h5>אנו רוצים שתחזרו בעתיד לכן אנו שואפים להפוך את השהייה שלכם למהנה ונוחה!</h5>
            </section>

            <div className="abuot">
                <article>
                    <h3>אודותינו</h3>
                    <h6>אנו שני שותפים, האחד תרמילאי מנוסה, והשניה מקומית מהאזור. לאחר שהבנו שקיים חוסר במקומות אירוח למטיילים בצפון הארץ החלטנו להקים את אכסניית טבריה, כך שתהווה בסיס ביתי, ממנו ניתן לצאת לטיולי יום ולחזור למקום נוח ובטיחותי. </h6>
                    <h6>הצוות שלנו ישמח לעזור לכם לתכנן את הטיול שלכם ולמצוא את הדרך ליעד הבא. אנו יודעים מה מטיילים צריכים, ואנחנו מכירים את המקומות המעודכנים ביותר בסביבה וכיצד להגיע לשם.</h6>
                </article>
            </div>

            <Services/>
            <FeaturedRoom/>
            <OLMap/>
            <Gallerys/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
