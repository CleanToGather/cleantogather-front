import React from 'react';
import EventModal from '../../common/modals/EventModal'
import ApiService from "../../../services/ApiService";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextEvent: {
                title:'',
                address:'',
                description:'',
                startDateTime:''
            }
        }
        this.getNextEvent = this.getNextEvent.bind(this);
    }

    componentDidMount() {
        this.getNextEvent();
    }

    getNextEvent() {
        ApiService.fetchEvents()
            .then(res => {
                if (res.data.length > 0) {
                    let datesArray = res.data.map(event => event.startDateTime);
                    let nextEvent = res.data[this.minDateIndex(datesArray)];
                    nextEvent.startDateTime = new Date(nextEvent.startDateTime)
                        .toLocaleString("fr-FR", {day: "numeric", month:"long", year: "numeric", hour: "numeric", minute: "numeric"});
                    this.setState({nextEvent: nextEvent});
                }
            });
    }

    minDateIndex(dates) {
        let minIndex = 0;
        for (let date of dates) {
            if (date < dates[minIndex]) minIndex = date.index;
        }
        return minIndex;
    }

    render() {
        return (
            <Container maxWidth="lg">
                <Box >
                    <Typography variant="h6" display="inline"> Prochaine marche le {this.state.nextEvent.startDateTime}</Typography>
                    <EventModal event={this.state.nextEvent}>
                        Participer
                    </EventModal>
                </Box>
                <Box id="tagline">
                    <Typography variant="h5">Grâce à Clean2Gather, participe au nettoyage de ta commune.<br/>
                    Signale les zones à déchets ou participe à une marche de nettoyage collaborative pour rendre ta ville plus propre !</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">{this.props.events} marches effectuées et plus de {this.props.markers} zones à déchets signalées</Typography>
                </Box>
            </Container>
        );
    }
}

export default Home;
