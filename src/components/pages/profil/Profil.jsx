import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Profil extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isEditable : false,
            pseudo : "Galaad",
            mail : "galaad.moll@gmail.fr"};

        this.setEditable = this.setEditable.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setEditable() {
        this.setState({isEditable: true});
    }

    submitEdit() {
        this.setState({isEditable: false});
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        let pseudo =(this.state.isEditable ?
            <Form.Control type="text" name="pseudo" onChange={this.onChange} value={this.state.pseudo}/> :
            this.state.pseudo);
        let email =(this.state.isEditable ?
            <Form.Control type="text" name="mail" onChange={this.onChange} value={this.state.mail}/> :
            this.state.mail);
        let modifyIcon = (this.state.isEditable ?
            <a onClick={this.submitEdit}><Image src="cancel.svg" className="icon"/></a> :
            <a onClick={this.setEditable}><Image src="modify.png" className="icon"/></a>);

        return (
            <Container id="content" fluid>
                <Row className="box">
                    <Col>
                        <Image src="logo.png"/>
                    </Col>
                    <Col>
                        <Row>
                            Pseudo : {pseudo}
                        </Row>
                        <Row>
                            Email : {email}
                        </Row>
                    </Col>
                    {modifyIcon}
                </Row>
                {this.state.pseudo &&
                    <Row className="box">
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control type="email" placeholder="Email"/>
                                </Col>
                                <Col>
                                    <Button type="submit">
                                        Créer un compte administrateur
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Row>
                }
            </Container>
        )
    }
}

export default Profil;
