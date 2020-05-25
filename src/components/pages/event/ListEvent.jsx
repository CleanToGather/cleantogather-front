import React, { Component } from 'react'
import ApiService from "../../../services/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class ListEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            message: null,
            modalShow: false,
            activeUsers: []
        }
        this.deleteEvent = this.deleteEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.reloadEventList = this.reloadEventList.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    componentDidMount() {
        this.reloadEventList();
    }

    reloadEventList() {
        ApiService.fetchEvents()
            .then((res) => {
                this.setState({events: res.data});
            });
    }

    deleteEvent(eventId) {
        ApiService.deleteEvent(eventId)
           .then(res => {
               this.setState({message : 'Event deleted successfully.'});
               this.setState({events: this.state.events.filter(event => event.id !== eventId)});
           })

    }

    editEvent(id) {
        window.localStorage.setItem("eventId", id);
        this.props.history.push('/events/edit');
    }

    addEvent() {
        window.localStorage.removeItem("eventId");
        this.props.history.push('/events/add');
    }

    handleModal(bool, users) {
        console.log(users)
        this.setState({modalShow: bool, activeUsers: users});
    }
        
    render() {
return (
            <div>
                <Typography variant="h4" style={style}>Détails des événements</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addEvent()}>
                    Ajouter un événement
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Titre</TableCell>
                            <TableCell align="left">Adresse</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Utilisateurs</TableCell>
			    <TableCell align="left">Editer</TableCell>
			    <TableCell align="left">Supprimer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.events.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left">{row.startDateTime}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="center" onClick={() => this.handleModal(true, row.userSubscribed)}>
                                    <PeopleIcon />
                                </TableCell>
                                <TableCell align="center" onClick={() => this.editEvent(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="center" onClick={() => this.deleteEvent(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                open={this.state.modalShow}
                onClose={() => this.handleModal(false, [])}>
                    <DialogTitle id="form-dialog-title">Utilisateurs inscrits</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        {this.state.activeUsers.map(user => (
                            <DialogContentText key={user.id}>
                                {user.email}
                            </DialogContentText>
                        ))}
                      </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListEvent;
