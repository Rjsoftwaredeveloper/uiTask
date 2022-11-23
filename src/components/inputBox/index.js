import React from "react";
import InputLabel from '@material-ui/core/InputLabel';

function InputBox( props ) {
    const { label } = props;
    return (
        <>
            <InputLabel shrink htmlFor="bootstrap-input">{ label }</InputLabel>
        </>
    )
}

export default InputBox;