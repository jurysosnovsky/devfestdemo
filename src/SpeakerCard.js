import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function SpeakerCard (props) {
    const report = props.report;
    const now = Date.now();
    const reportMessage = report.start > now ? 'Доклад скоро начнется' : report.end > now ? 'Доклад идет' : 'Доклад закончился';
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        src={report.speaker.photo}
                        alt={`{$report.speaker.company} / {$report.speaker.name}`}
                    />
                }
                title={report.speaker.name}
                subheader={`${report.speaker.company} / ${report.speaker.name}`}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {report.title}
                </Typography>
                <Typography variant="caption" component="p" align={"justify"}>
                    {report.agenda}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <AccessTimeIcon />
                </IconButton>
                <Typography variant="subtitle2" component="p" align={"justify"}>
                    {reportMessage}
                </Typography>
            </CardActions>
        </Card>
    );
}