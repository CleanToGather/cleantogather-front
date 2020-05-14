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

class ListMarker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            markers: [],
            message: null
        }
        this.addAdress = this.addAdress.bind(this);
        this.reloadMarkerList = this.reloadMarkerList.bind(this);
    }

    componentDidMount() {
        this.reloadMarkerList();
    }

    reloadMarkerList() {
        ApiService.fetchMarkers()
            .then((res) => {
                this.setState({markers: res.data})
            });
    }

    deleteMarker(markerId) {
        ApiService.deleteMarker(markerId)
           .then(res => {
               this.setState({message : 'marker deleted successfully.'});
               this.setState({markers: this.state.markers.filter(marker => marker.id !== markerId)});
           })

    }

    addAdress() {
        window.localStorage.removeItem("markerId");
        this.props.history.push('/signalements/Formulaire');
    }

    render() {
return (
            <div>
                <Typography variant="h4" style={style}>Détails des utilisateurs</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addAdress()}>
                    Ajouter un utilisateur
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">coord_x</TableCell>
                            <TableCell align="right">coord_y</TableCell>
                            <TableCell align="right">Editer</TableCell>
                            <TableCell align="right">Supprimer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.markers.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.coord_x}</TableCell>
                                <TableCell align="right">{row.coord_y}</TableCell>
                                <TableCell align="right" onClick={() => this.editmarker(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteMarker(row.id)}><DeleteIcon /></TableCell>
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

export default ListMarker;