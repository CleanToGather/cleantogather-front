import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class EventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalShow: false,
            mail:''
        }
        this.subscribe = this.subscribe.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setModalShow = this.setModalShow.bind(this);
    }

    setModalShow(bool) {
        this.setState({modalShow: bool});
    }

    subscribe() {

    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        let buttonStyle=(this.props.isContained && "MuiButton-contained MuiButton-containedPrimary");
        return (
            <>
                <Button className={buttonStyle} id="eventModal" onClick={() => this.setModalShow(true)}>
                    {this.props.children}
                </Button>

                <Modal show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
                size="lg" centered>
                    <Modal.Header closeButton>
                        <Typography variant="h4" id="contained-modal-title-vcenter">
                          {this.props.event.title}
                        </Typography>
                    </Modal.Header>
                    <Modal.Body>
                        <Typography variant="h5" style={{margin: 10}}>Venez nombreux au {this.props.event.address} <br/> le {this.props.event.startDateTime}</Typography>
                        <Typography>
                          {this.props.event.description}
                        </Typography>
                    </Modal.Body>
                    {this.props.canSubscribe &&
                    <Modal.Footer>
                        <TextField className="mr-auto" style={{flexGrow:1}} name="mail" type="email" placeholder="Indiquez votre adresse mail" onChange={this.onChange}/>
                        <Button onClick={this.subscribe}>S'inscrire</Button>
                    </Modal.Footer>}

                </Modal>
            </>
        );
    }
}

export default EventModal;
