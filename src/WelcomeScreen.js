import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TodayIcon from '@material-ui/icons/Today';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import SpeakersScreen from "./SpeakersScreen";
import logo from './images/logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fill: {
        marginTop: 30,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function WelcomeScreen() {
    const classes = useStyles();

    const [isShowScheduler, setIsShowScheduler] = useState(false);
    const handleClick = event => setIsShowScheduler(true);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img className={classes.fill} src={logo} alt={"logo"} />
                </Grid>

                    {isShowScheduler ?
                        <SpeakersScreen /> :
                        <React.Fragment>
                            <Grid item xs={12} md={6}>
                                <Button
                                    onClick={handleClick}
                                    className={classes.button}
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<TodayIcon />}
                                    fullWidth
                                >
                                    Расписание
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<HowToRegIcon />}
                                    fullWidth
                                >
                                    Зарегистрироваться
                                </Button>
                            </Grid>
                        </React.Fragment>
                    }
            </Grid>
        </div>
    );
}
/**

 */