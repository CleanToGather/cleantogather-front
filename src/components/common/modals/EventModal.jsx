import React from 'react';
import ReactDOM from 'react-dom';
import ApiService from "../../../services/ApiService";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Box from '@material-ui/core/Container';

import { display } from '@material-ui/system';


class EventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail:'', modalShow: false}
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
        return (
            <>
                <Button size="sm" id="subscribe" onClick={() => this.setModalShow(true)}>
                    {this.props.children}
                </Button>

                <Modal show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
                size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          {this.props.event.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Venez nombreux au {this.props.event.address} le {this.props.event.startDateTime}</h4>
                        <p>
                          {this.props.event.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form>
                            <Form.Control name="mail" type="email" placeholder="Indiquez votre adresse mail" onChange={this.onChange}/>
                            <Button onClick={this.subscribe}>S'inscrire</Button>
                        </Form>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EventModal;
