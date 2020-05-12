import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from '../../common/modals/EventModal'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    render() {
        return (
            <Container id="content" fluid>
                <Row className="box">
                    <p>Prochaine marche le {this.props.event}</p>
                    <EventModal event={{title: "Ramassage des déchets", adress: "Issy", date: "11 mai", description: "Venez ramassez les poubelles ! Sah quel plaisir !"}}>
                        Participer
                    </EventModal>
                </Row>
                <Row className="box" id="site-pitch">
                    <p>Grâce à Clean2Gather, participe au nettoyage de ta commune.<br/>
                    Signale les zones à déchets ou participe à une marche de nettoyage collaborative pour rendre ta ville plus propre !</p>
                </Row>
                <Row className="box">
                    <p>{this.props.events} marches effectuées et plus de {this.props.markers} zones à déchets signalées</p>
                </Row>
            </Container>
        );
    }
}

export default Home;
