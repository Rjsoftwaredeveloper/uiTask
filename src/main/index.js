import React from "react";
import ContactDetials from 'pages/contactSection/index';
import SuscribeMail from 'pages/suscribeSection/index';
import ContactForm from 'pages/formSection/index';

function Main() {
    return (
        <>
            <section className="contentBox">
                <ContactDetials />
                <ContactForm />
            </section>
            <SuscribeMail />
        </>
    )
}

export default Main;