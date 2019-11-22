import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WelcomeScreen from "./WelcomeScreen";

function AppContainer() {
    return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <WelcomeScreen />
                </Container>
            </React.Fragment>
        );
}

export default AppContainer;