import React, { useRef } from "react";
import Button from '@material-ui/core/Button';

import EmailBox from 'components/emailBox/index';

import './suscribe.css';

function SuscribeMail() {

    let email = useRef(null);

    const onUpdateDeatils = ( value ) => {
        email.current = value;
    }

    const suscribe = () => {
        console.log("suscribe", email);
    }

    return (
        <section className="suscribeBox">
            <h2>Subscribe to our mail</h2>
            <p>Enter your email address to receive the latest notification, newsletters, and updates from WIN!</p>
            <section className="itemField d-flex w-100 gap-50 mt-40px">
                <section className="textField d-flex w-100 align_center">
                    <EmailBox placeholder="Your email address" updateDeatils={onUpdateDeatils} />

                    <section className="suscribeBtn">
                        <Button variant="contained" color="primary" disableElevation onClick={ suscribe } >
                            Subscribe
                        </Button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default SuscribeMail;