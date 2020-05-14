import React from "react";
import ApiService from "../../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Formulaire extends React.Component {
	constructor(props){
        super(props);
        this.state ={
            coord_x: '',
            coord_y: '',
            markedDateTime : new Date().toJSON(),
            message: null
        }
        this.saveAdress = this.saveAdress.bind(this);
    }

    saveAdress = (e) => {
        e.preventDefault();
        let marker = {coord_x: this.state.coord_x, coord_y: this.state.coord_y, markedDateTime : this.state.markedDateTime};
        ApiService.addMarker(marker)
            .then(res => {
                this.setState({message : 'Marqueur ajouté avec succès'});
                this.props.history.push('/markers');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4">Placer un marqueur</Typography>
                <form>
                    <TextField type="text" placeholder="coord_x" fullWidth margin="normal" name="coord_x" value={this.state.coord_x} onChange={this.onChange}/>
                    <TextField type="text" placeholder="coord_y" fullWidth margin="normal" name="coord_y" value={this.state.coord_y} onChange={this.onChange}/>
                    <TextField type="text" placeholder="markedDateTime" fullWidth margin="normal" name="markedDateTime" value={this.state.markedDateTime} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveAdress}>Save</Button>
            	</form>
	    </div>
        );    
    }
}

export default Formulaire;