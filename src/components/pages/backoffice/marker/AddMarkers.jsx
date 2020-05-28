import React from "react";
import ApiService from "../../../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Formulaire extends React.Component {
	constructor(props){
        super(props);
        this.state ={
            address : '',
            coord_x: '',
            coord_y: '',
            markedDateTime : new Date().toJSON(),
            message: null,
            confirm : false,
			isValid: false
        }
        this.saveAddress = this.saveAddress.bind(this);
    }

    saveAddress = (e) => {
        axios.get("http://nominatim.openstreetmap.org/search?format=json&limit=1&q="+this.state.address).then(response => {
            if(response.data[0]){
                var confirm = window.confirm("Confirmez-vous cette adresse ?\n" + response.data[0].display_name);
                if (confirm) {
                    this.setState({coord_x : response.data[0].lat, coord_y : response.data[0].lon});
                    let marker = {address : this.state.address, coord_x: this.state.coord_x, coord_y: this.state.coord_y, markedDateTime : this.state.markedDateTime};
					console.log(marker)
                    ApiService.addMarker(marker)
                        .then(res => {
                            this.setState({message : 'Marqueur ajouté avec succès'});
							if (localStorage.userInfo)
                            	this.props.history.push('/markers');
							else
								this.props.history.push('/');
                    });
                }

            }
            else{
                this.setState({message : "Votre adresse n'a pas été trouvé"})
            }
        });
    }

    onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

    render() {
        return(
            <div className="addMarker">
                <Typography variant="h4">Placer un marqueur</Typography>
                <form onSubmit={e => { e.preventDefault(); }}>
                    <TextField type="text" placeholder="Adresse" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveAddress}>Signaler</Button>
            	</form>
                <Typography style={{color : "red"}}>{this.state.message}</Typography>
	       </div>
        );
    }
}

export default Formulaire;
