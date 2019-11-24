import React from 'react';
import Grid from '@material-ui/core/Grid';
import speakers from "./speakers";
import SpeakerCard from "./SpeakerCard";

export default function SpeakersScreen() {
    return (
        <React.Fragment>
                {speakers.map(
                    (speaker, index) =>
                        <Grid item xs={12} md={4} lg={3} key={index}>
                            <SpeakerCard
                                report={speaker}
                            />
                        </Grid>)
                }
        </React.Fragment>
    );
}