import React from "react";
import "./listEvents.css";
import ApiService from "../../../services/ApiService";
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class ListEvents extends React.Component {
  constructor(props){
    super(props);
	this.state = {
      listEvents : []
    }
  }

  	componentDidMount(){
    	this.getEvents();
  	}

  	getEvents(){
    	var addEvent = this.state.listEvents;
    	ApiService.fetchEvents().then(res => {
      	if (res.data.length > 0) {  
        	res.data.map(event => {
          	addEvent.push(event);
        	});
      	}
      	this.setState({listEvents : addEvent});
    	});
  	}

	render () {
		return (
			<div class="liste">
				{this.state.listEvents.map(event => (
					<div className="event">
	                	<Typography variant="h4" id="contained-modal-title-vcenter">
                          {event.title}
                        </Typography><br/>
                        <Typography variant="h5" style={{margin: 10}}>Venez nombreux au {event.address} <br/> le {new Date(event.startDateTime).toLocaleString("fr-FR", {day: "numeric", month:"long", year: "numeric", hour: "numeric", minute: "numeric"})}</Typography><br/>
                        <Typography>
                          {event.description}
                        </Typography><br/>
                        <TextField className="mr-auto" style={{flexGrow:1}} name="mail" type="email" placeholder="Indiquez votre adresse mail" onChange={this.onChange}/>
                        <Button onClick={this.subscribe}>S'inscrire</Button>
	                </div>
				))}
			</div>
		);
	}
}

export default ListEvents;