import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

function NumberBox( props ) {
    const { placeholder, updateDeatils } = props;
    const [value, setValue] = useState("");

    const getValue = ( event ) => {
        let val = event.target.value;
        setValue( val );
        if( updateDeatils ) {
            updateDeatils( Number(val) );
        }
    }

    return (
        <TextField
            fullWidth
            type="number"
            placeholder={placeholder}
            variant="outlined"
            value={ value }
            onChange={ getValue }
        />
    )
}

export default NumberBox;