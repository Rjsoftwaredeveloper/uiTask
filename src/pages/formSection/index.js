import React, { useRef, useState } from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import TextBox from 'components/textBox/index';
import NumberBox from 'components/numberBox/index';
import InputLabelField from 'components/inputBox/index';
import EmailBox from 'components/emailBox/index';

import formValidator from 'validation/index';

/* eslint-disable no-useless-escape */

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function ContactForm() {

    const [formValidationDetails, setFormValidationDetails] = useState({
        name: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required"]
        },
        email: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required", "regexValidation"],
            validation: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        },
        phoneNumber: {
            error: {
                isError: false,
                message: "Invalid phone number",
            },
            checkParams: ["required", "regexValidation"],
            validation: '^[0-9]{10}$'
        },
        message: {
            error: {
                isError: false,
                message: "",
            },
            checkParams: ["required"]
        },
        zipcode: {
            error: {
                isError: false,
                message: "Inavlid zipcode",
            },
            checkParams: ["required", 'regexValidation'],
            validation: '^[0-9]*$'
        },
    });

    let formDetails = useRef({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        zipcode: ""
    })

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const onUpdateDeatils = ( key, value ) => {
        formDetails.current[key] = value;
    }

    const submitDetails = () => {        
        const { isError, tempState } = formValidator(formValidationDetails, formDetails.current);   
        // console.log(isError)     
        if( !isError ) {
            console.log("valueeeeeeeeeee", formDetails.current);
            setOpen( true );
        }      
        setFormValidationDetails( {...tempState} )
    }

    return (
        <section className="contactForm">
            <section className="d-flex w-100 gap-50">
                <section className="textField w-100">
                    <InputLabelField className="labelItems" label="Name" />
                    <TextBox placeholder="Full Name"  minRows={1} updateDeatils={(value) => onUpdateDeatils('name', value) } />
                    { formValidationDetails.name.error.isError && <p style={{ color: 'red' }}>Required</p> }
                </section>           
                     
                <section className="textField w-100">
                    <InputLabelField className="labelItems" label="Email" />
                    <EmailBox placeholder="xyz@abcd.com" updateDeatils={(value) => onUpdateDeatils('email', value) } validationError={formValidationDetails.email.error.isError} />
                </section>
            </section>
            <section className="d-flex w-100 gap-50 mt-40px">
                <section className="textField w-100">
                    <InputLabelField className="labelItems" label="Phone Number" />
                    <NumberBox placeholder="(123)456-7890" maxLength={10} updateDeatils={(value) => onUpdateDeatils('phoneNumber', value) }  />
                    { formValidationDetails.phoneNumber.error.isError && <p style={{ color: 'red' }}>{ formValidationDetails.phoneNumber.error.message }</p> }
                </section>

                <section className="textField w-100">
                    <InputLabelField className="labelItems" label="ZIP Code" />
                    <NumberBox placeholder="xxxxxx" maxLength={6} updateDeatils={(value) => onUpdateDeatils('zipcode', value) } />
                    { formValidationDetails.zipcode.error.isError && <p style={{ color: 'red' }}>{ formValidationDetails.zipcode.error.message }</p> }
                </section>
            </section>

            <section className="textField w-100 mt-40px">
                <InputLabelField className="labelItems" label="Message" />
                <TextBox placeholder="Please type it here...." minRows={10} updateDeatils={(value) => onUpdateDeatils('message', value) } formValidationDetails={ formValidationDetails } />
                { formValidationDetails.message.error.isError && <p style={{ color: 'red' }}>Required</p> }
            </section>

            <section className="btn mt-40px">
                <Button variant="contained" color="primary" disableElevation onClick={ submitDetails }>
                    Submit
                </Button>
            </section>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </section>
    )
}

export default ContactForm;