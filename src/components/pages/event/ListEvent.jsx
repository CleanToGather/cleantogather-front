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
import Typography from '@material-ui/core/Typography';

class ListEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            message: null
        }
        this.deleteEvent = this.deleteEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.reloadEventList = this.reloadEventList.bind(this);
    }

    componentDidMount() {
        this.reloadEventList();
    }

    reloadEventList() {
        ApiService.fetchEvents()
            .then((res) => {
                this.setState({events: res.data})
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
                            <TableCell align="right">Titre</TableCell>
                            <TableCell align="right">Adresse</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Description</TableCell>
			    <TableCell align="right">Editer</TableCell>
			    <TableCell align="right">Supprimer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.events.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.startDateTime}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editEvent(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteEvent(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListEvent;
