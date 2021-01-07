import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export default function ClauseQuestions({ certificateValue, handleCertificateChange }) {

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Add Clauses and Finish
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Will this company be certificated?</FormLabel>
                        <RadioGroup aria-label="Certificated?" name="certificated" value={certificateValue} onChange={handleCertificateChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Fragment>
    );
}