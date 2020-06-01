import React from 'react';
import EventModal from '../../common/modals/EventModal'
import ApiService from "../../../services/ApiService";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

/*TODO:
Fetch stats number of events and markers
Subscribe to an event
*/

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbEvents: 0,
            nbMarkers: 0,
            nextEvent: {
                title:'',
                address:'',
                description:'',
                startDateTime:''
            }
        }
        this.getNextEvent = this.getNextEvent.bind(this);
        this.getStats = this.getStats.bind(this);
    }

    componentDidMount() {
        this.getNextEvent();
        this.getStats();
    }

    getNextEvent() {
        ApiService.fetchEvents()
            .then(res => {
                if (res.data.length > 0) {
                    let datesArray = res.data.map(event => event.startDateTime);
                    let nextEvent = res.data[this.minDateIndex(datesArray)];
                    this.setState({nextEvent: nextEvent});
                }
            });
    }

    getStats() {
        ApiService.fetchNumberEvents().then(res => {
                this.setState({nbEvents: res.data});
            });
        ApiService.fetchNumberMarkers()
            .then(res => {
                this.setState({nbMarkers: res.data});
            });
    }

    minDateIndex(dates) {
        let minIndex = 0;
        for (let i=0;i<dates.length;i++) {
            if (dates[i] < dates[minIndex]) minIndex = i;
        }
        return minIndex;
    }

    render() {
        return (
            <Container maxWidth="lg">
                <Box className="bigDiv">
                    <Typography variant="h6" display="inline"> Prochaine marche le {new Date(this.state.nextEvent.startDateTime).toLocaleString("fr-FR", {day: "numeric", month:"long", year: "numeric", hour: "numeric", minute: "numeric"})}</Typography>
                    <EventModal id="homeSubscribe" event={this.state.nextEvent} canSubscribe isContained>
                        Participer
                    </EventModal>
                </Box>
                <Box id="tagline" className="bigDiv">
                    <Typography variant="h5">Grâce à Clean2Gather, participe au nettoyage de ta commune.<br/>
                    Signale les zones à déchets ou participe à une marche de nettoyage collaborative pour rendre ta ville plus propre !</Typography>
                </Box>
                <Box className="bigDiv">
                    <Typography variant="h6">Déjà {this.state.nbEvents} marches effectuées ou à venir et plus de {this.state.nbMarkers} zones à déchets signalées</Typography>
                </Box>
            </Container>
        );
    }
}

export default Home;
