import React, { Component } from 'react'
import ApiService from "../../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';

class AddEvent extends Component{

    constructor(props){
        super(props);
        this.state ={
            title: '',
	        address: '',
            description: '',
	        startDateTime: new Date(),
            message: null
        }
        this.saveEvent = this.saveEvent.bind(this);
    }

    saveEvent = (e) => {
        e.preventDefault();
        let event = {title: this.state.title, address: this.state.address, description: this.state.description, startDateTime: this.state.startDateTime.toJSON()};
        console.log(event);
        ApiService.addEvent(event)
            .then(res => {
                this.setState({message : 'Event added successfully.'});
                this.props.history.push('/events');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    handleDateChange = (date) =>
        this.setState({startDateTime: date});

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Event</Typography>
                <form style={formContainer}>

                    <TextField placeholder="Titre" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>

		            <TextField placeholder="Adresse" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>

                    <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                        variant="inline"
                        ampm={false}
                        name="startDateTime"
                        value={this.state.startDateTime}
                        onChange={this.handleDateChange}
                        onError={console.log}
                        disablePast
                        format="dd/MM/yyyy HH:mm"
                      />
                    </MuiPickersUtilsProvider>

                    <Button variant="contained" color="primary" onClick={this.saveEvent}>Save</Button>
            	</form>
	    </div>
        );
    }

}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default AddEvent;
